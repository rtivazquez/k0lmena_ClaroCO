 @Smoke
Feature: login  
    Scenario: inicio de sesión exitosa
        Given El usuario esta en la pagina de login 
        When El usuario ingresa el mail
        And El usuario ingresa la contraseña
        And El usuario clickea el botón Login en salesforce
        Then El usuario es redireccionado a la vista 360 del cliente