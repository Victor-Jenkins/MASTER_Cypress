@RegressionTest
Feature:Funcionalidad2

    Como analista de teste quero acessar a pagina do publicazo e realizar uma pesquisa de Teste.

	#Teste de pesquisa
	@Test
	Scenario Outline: 002_Check
		Given un aceso
		When  item2 "<item2>"
		Then verifica item2 existe
		
	Examples:

	|item2      	| 
	|Teste			| 
	|Enfermeira		| 
	|Cabeleleira	|