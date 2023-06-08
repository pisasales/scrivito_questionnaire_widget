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
      description: "Optional context activity ID",
    },
    conGid: {
      title: 'Contact ID',
      description: "Optional context contact ID",
    },
    proGid: {
      title: 'Project ID',
      description: "Optional context project ID",
    },
    qstSelector: {
      title: 'Show questionnaires selector?',
      description: "Questionnaires selector allows to choose another questionnaire from list. When is OFF, questionnaire header is not shown.",
    },
  },

  properties: ['qstGid','actGid','conGid','proGid', 'qstSelector'],
  initialContent: {
    qstSelector: true,
  },

});
