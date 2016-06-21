var dados = {
  "racas": [
    {
      "nome": "Humano",
      "descricao": "Criaturas versáteis valorosas e muito ambiciosas",
      "movimentacao": 9,
      "forca": 0,
      "destreza": 0,
      "constituicao": 0,
      "inteligencia": 0,
      "sabedoria": 0,
      "carisma": 0
    },
    {
      "nome": "Anão",
      "descricao": "Pequenos seres robustos e atarracados, famosos por serem rabugentos e teimosos",
      "movimentacao": 6,
      "forca": 0,
      "destreza": 0,
      "constituicao": 2,
      "inteligencia": 0,
      "sabedoria": 0,
      "carisma": -2
    },
    {
      "nome": "Elfo",
      "descricao": "Humanoides esguios e silvestres, com antecedentes místicos e aparencia inconfundível",
      "movimentacao": 9,
      "forca": 0,
      "destreza": 2,
      "constituicao": -2,
      "inteligencia": 0,
      "sabedoria": 0,
      "carisma": 0
    },
    {
      "nome": "Halfling",
      "descricao": "Seres pequenos, cuja capacidade de encrencar-se é inversamente proporcional ao seu tamanho",
      "movimentacao": 6,
      "forca": -2,
      "destreza": 2,
      "constituicao": 0,
      "inteligencia": 0,
      "sabedoria": 0,
      "carisma": 0
    }
  ],
  "classes": [
    {
      "descricao": "Clérigo",
      "dadosVida": 8,
      "forca": 0,
      "destreza": 0,
      "inteligencia": 0,
      "sabedoria": 14,
      "constituicao": 0,
      "carisma": 0,
      "atributoJogProt": "Sabedoria",
      "classeMagica": "Sim"
    },
    {
      "descricao": "Guerreiro",
      "dadosVida": 10,
      "forca": 12,
      "destreza": 0,
      "inteligencia": 0,
      "sabedoria": 0,
      "constituicao": 12,
      "carisma": 0,
      "atributoJogProt": "Força",
      "classeMagica": "Não"
    },
    {
      "descricao": "Mago",
      "dadosVida": 4,
      "forca": 0,
      "destreza": 0,
      "inteligencia": 14,
      "sabedoria": 0,
      "constituicao": 0,
      "carisma": 0,
      "atributoJogProt": "Inteligência",
      "classeMagica": "Sim"
    },
    {
      "descricao": "Ladrão",
      "dadosVida": 6,
      "forca": 0,
      "destreza": 12,
      "inteligencia": 0,
      "sabedoria": 0,
      "constituicao": 0,
      "carisma": 0,
      "atributoJogProt": "Destreza",
      "classeMagica": "Não"
    }
  ],
  "personagens": []
};

exports.racas = function (req, res) {
  var racas = [];

  dados.racas.forEach(function (raca) {
    racas.push({
      nome: raca.nome,
      descricao: raca.descricao,
      movimentacao: raca.movimentacao,
      forca: raca.forca,
      destreza: raca.destreza,
      constituicao: raca.constituicao,
      inteligencia: raca.inteligencia,
      sabedoria: raca.sabedoria,
      carisma: raca.carisma
    });
  });

  res.json({
    racas: racas
  });
};

exports.classes = function (req, res) {
  var classes = [];

  dados.classes.forEach(function (classe) {
    classes.push({
      descricao: classe.descricao,
      dadosVida: classe.dadosVida,
      forca: classe.forca,
      destreza: classe.destreza,
      inteligencia: classe.inteligencia,
      sabedoria: classe.sabedoria,
      constituicao: classe.constituicao,
      carisma: classe.carisma,
      atributoJogProt: classe.atributoJogProt,
      classeMagica: classe.classeMagica
    });
  });

  res.json({
    classes: classes
  });
};

exports.personagem = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < dados.personagens.length) {
    res.json({
      personagem: dados.personagens[id]
    });
  } else {
    res.json(false);
  }
};

exports.inserirPersonagem = function (req, res) {
  req.body.id = dados.personagens.length;
  dados.personagens.push(req.body);
  res.json(req.body);
};
