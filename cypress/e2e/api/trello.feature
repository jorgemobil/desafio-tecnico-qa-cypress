Feature: Consulta API Trello

  Scenario: Validar retorno da action do Trello
    When envio uma requisição GET para a API do Trello
    Then o status code da resposta deve ser 200
    And devo exibir o nome da lista retornada