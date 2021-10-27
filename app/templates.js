(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['abnt'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title> Teste </title>\n    <style>\n      @page {\n        size: A4;\n        margin-left: 3cm;\n        margin-top: 3cm;\n        margin-bottom: 2cm;\n        @top-right {\n          content: counter(page);\n        }\n      }\n\n      @page :first {\n        margin-top: 3cm;\n        @top-right {\n          content: \"\";\n        }\n      }\n    </style>\n    <style> /* Capa */\n      @media screen {\n        section.capa {\n          display: none;\n        }\n      }\n      @media print {\n        section.capa {\n          height: 247mm;\n          page-break-after: always;\n        }\n      }\n      section.capa main {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n      }\n      section.capa main * {\n        text-align: center;\n      }\n      /* section.capa main .space {\n        flex-grow: 1;\n        padding-top: 1em;\n      } */\n      section.capa main h1 {\n        font-size: 14pt;\n        font-weight: bold;\n      }\n      section.capa main h2 {\n        font-size: 14pt;\n      }\n    </style>\n    <style> /* Texto */\n      section.texto {\n        counter-reset: section;\n      }\n      section.texto p {\n        text-align: justify;\n        margin: 0;\n        line-height: 1.5;\n        padding-bottom: 0.5em;\n      }\n      section.texto h1::before {\n        counter-increment: section;\n        content: counter(section) \". \";\n      }\n      section.texto h1 {\n        counter-reset: section2;\n      }\n      section.texto h2::before {\n        counter-increment: section2;\n        content: counter(section) \".\" counter(section2) \". \";\n      }\n      section.texto img {\n        max-width: 5cm;\n      }\n      section.texto blockquote {\n        padding: 0 1em;\n        background-color: #e6e6e6;\n      }\n    </style>\n  </head>\n\n  <body>\n    \n    <section class=\"capa\">\n      <main>\n        <div> "
    + alias4(((helper = (helper = helpers.instituicao || (depth0 != null ? depth0.instituicao : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instituicao","hash":{},"data":data}) : helper)))
    + " </div>\n    \n        <div class=\"space\"></div>\n    \n        <div>\n          <h1> "
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data}) : helper)))
    + " </h1>\n          <h2> "
    + alias4(((helper = (helper = helpers.subtitulo || (depth0 != null ? depth0.subtitulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitulo","hash":{},"data":data}) : helper)))
    + " </h2>\n        </div>\n    \n        <div class=\"space\">\n          <p> "
    + alias4(((helper = (helper = helpers.turma || (depth0 != null ? depth0.turma : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"turma","hash":{},"data":data}) : helper)))
    + " </p>\n          <p> "
    + alias4(((helper = (helper = helpers.autor || (depth0 != null ? depth0.autor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"autor","hash":{},"data":data}) : helper)))
    + " </p>\n        </div>\n    \n        <div> <p> "
    + alias4(((helper = (helper = helpers.local || (depth0 != null ? depth0.local : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"local","hash":{},"data":data}) : helper)))
    + " </p> <p> "
    + alias4(((helper = (helper = helpers.ano || (depth0 != null ? depth0.ano : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ano","hash":{},"data":data}) : helper)))
    + " </p> </div>\n      </main>\n    </section>\n\n    <section class=\"texto\">\n\n      "
    + ((stack1 = ((helper = (helper = helpers._body || (depth0 != null ? depth0._body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n    </section>\n  \n  </body>\n\n</html>\n \n";
},"useData":true});
})();
