import * as Scrivito from "scrivito";
import qstWidgetIcon from "../../assets/images/qst_widget.svg";

Scrivito.provideEditingConfig("QstWidget", {
  title: "Questionnaire",
  thumbnail: qstWidgetIcon,
  attributes: {
    qstGid: {
      title: 'Questionnaire ID',
      description: "E.g. 120E84E780AF4748A419556F177DC8E2",
    },
    actGid: {
      title: 'Activity ID',
      description: "Optional, e.g. 1D5E6B454194479CA635CF0CE46160DF",
    },
    conGid: {
      title: 'Contact ID',
      description: "Optional, e.g. F62F7AF81A878185E030A8C00C016215",
    },
    proGid: {
      title: 'Project ID',
      description: "Optional, e.g. 5D43347E49984F7E8C0AFAF6660034DE",
    },
    lngSelector: {
      title: 'Show languages selector?',
      description: "Languages selector allows to choose other language from list.",
    },
    qstSelector: {
      title: 'Show questionnaires selector?',
      description: "Questionnaires selector allows to choose another questionnaire from list. When is on, questionnaire header is not shown.",
    },
  },

  properties: ['qstGid','actGid','conGid','proGid','lngSelector', 'qstSelector'],
  initialContent: {
    lngSelector: true,
    qstSelector: true,
  },

});
