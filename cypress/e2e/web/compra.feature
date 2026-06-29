Feature: Fluxo de compra

  Scenario: Realizar compra de um produto
    Given que acesso o site Automation Exercise
    When realizo login com um usuario valido
    And busco pelo produto "Dress"
    Then devo visualizar os produtos encontrados
    And adiciono o primeiro produto ao carrinho
    Then devo visualizar o carrinho de compras
    When avanço para a tela de pagamento
    Then devo visualizar o produto na tela de pagamento