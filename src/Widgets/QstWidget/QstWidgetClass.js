import * as Scrivito from "scrivito";

export const QstWidget = Scrivito.provideWidgetClass("QstWidget", {
  attributes: {
    qstSelector: "boolean",
    qstGid:"string",
    actGid:"string",
    conGid:"string",
    proGid:"string",
  },
});