@RegressionTest
Feature:Funcionalidad

	
	@Test
	Scenario Outline: 001_Check_Find
		Given acess
		When item "<item>"
		Then verifica
		
	Examples:

	|item      		| 
	|Teste			| 
	|Enfermeira		| 
	|Cabeleleira	|