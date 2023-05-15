import * as React from "react"; /// not used here, but don't delete
import * as Scrivito from "scrivito";

import "./QstWidget.scss";

import { QuestionnaireApi } from 'jr-questionnaire-react';
import { QuestionnaireEvents } from 'jr-questionnaire-react';

const completedCallback = () => {
  removeQstEventListeners();
  window.location.href = "/QstFinished";
}

function addQstEventListeners() {
  QuestionnaireEvents.addEventListener("completed", completedCallback);
}

function removeQstEventListeners() {
  QuestionnaireEvents.removeEventListener("completed", completedCallback);
}

Scrivito.provideComponent("QstWidget", ({ widget }) => {
  addQstEventListeners();

  /// parameters for ReactJS Qst-Component
  const components = {
    "LockScreen": {   /// screen is locked when loading meta data, opening new questionnaire page, sending data to backend 
      "do": false,
      "notify": true
    },
    "QstSelPopup": {  /// menu for choosing questionnaires
      "do": true,
      "notify": false
    },
    "LngSelPopup": {  /// menu for choosing questionnaire language
      "do": true,
      "notify": false
    }
  }


  // tenant and qst_id - is the key to identify questionnaire
  // other context data is saved in PisaSales together with answers
  const context = {
    tenant: "psatst",   /// test tenant, later should be replaced by by page ID automatically 
                        /// or to be as manually parameter in configuration.
    qst_id: widget.get("qstGid"),
    act_id: widget.get("actGid"),
    con_id: widget.get("conGid"),
    pro_id: widget.get("proGid")
  }

  return (
    <div
      className="qst-widget"
    >
      <QuestionnaireApi.QuestionnaireGlobal
        supportsMultipleQuestionnaires={widget.get("qstSelector")}
        showLanguageSelect={widget.get("lngSelector")}  // TODO: check QST component why it is always showing language selector
        showFooter={true}
        components={components}
        /// when context is undefined QST component takes data from URL
        context={context.tenant && context.qst_id ? context : undefined}
      />
    </div>
  )
}
);
