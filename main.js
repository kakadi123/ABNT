
var NOME_TEMPLATE = "abnt";

var VIEWER_URL = "/viewer/vivliostyle-viewer.html#x=";

function fazUrlViewer(fonte) {
  return VIEWER_URL + fonte;
}

var CAMPOS = {
  titulo: "Título",
  subtitulo: "Subtítulo",
  autor: "Autor",
  instituicao: "Instituição",
  local: "Local",
  ano: "Ano",
  turma: "Turma",
}

var DEFAULT = {
  titulo: "Título",
  subtitulo: "Subtítulo",
  autor: "João da Neves",
  instituicao: "Universidade do Acre",
  local: "Vitória",
  ano: "2018",
  turma: "Engenharia Civil",
}

var faz_input_data = (id, txt, ph="", dft="") => `
  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="campo-${id}"> ${txt} </label>
    <input class="col-sm-10" type="text"
      name="${id}" id="campo-${id}" class="form-control" placeholder="${ph}"
      value="${dft}">
  </div>
`;

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

var editor;

$(document).ready(function() {

  var template = Handlebars.templates[NOME_TEMPLATE];

  editor = new Quill('#editor', {
    placeholder: 'Escreva vosso trabalho...',
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });

  // Faz tabela de campos
  $.each(CAMPOS, (id, txt) => {
    var dft = DEFAULT[id];
    var html = faz_input_data(id, txt, null, dft);
    $("#form-dados").append(html);
  });

  // Botões

  // $("#btn_get").click(function(){
  //   var htmlContent = editor.root.innerHTML;
  //   console.log(htmlContent);
  //   // setaOutput(htmlContent);
  // });

  $("#btn_formata").click(function(){
    var dados = pegaDados();
    var corpo = editor.root.innerHTML;

    dados["_body"] = corpo;
    console.log(dados);
    var htmlRes = template(dados);
    console.log(htmlRes);

    // setaOutput(htmlRes);

    var uri = fazURI("text/html", codificaB64(htmlRes));
    abreLink(fazUrlViewer(uri));
  });

});


// function setaOutput(texto){ $("#output").text(texto) };

function fazURI(tipo, b64) {
  var dataUri = "data:"+ tipo + ";base64," + b64;
  return dataUri;
}

function abreLink(link) {
  window.open(link, '_blank');
}

function pegaDados(form) {
  var dados = {};
  $("#form-dados :input").each(function() {
    var name = $(this).attr("name")
    if(name.length > 0) {
      dados[name] = $(this).val();
    }
  });
  return dados;
}


// base64

function u_atob(ascii) {
  return Uint8Array.from(atob(ascii), c => c.charCodeAt(0));
}

function u_btoa(buffer) {
  var binary = [];
  var bytes = new Uint8Array(buffer);
  for (var i = 0, il = bytes.byteLength; i < il; i++) {
      binary.push(String.fromCharCode(bytes[i]));
  }
  return btoa(binary.join(''));
}

function codificaB64(txt) {
  return u_btoa( new TextEncoder().encode(txt) );
}

function decodificaB64(b64) {
  return new TextDecoder().decode(u_atob(b64));
}
