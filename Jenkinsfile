pipeline {
    agent any

    tools {
        maven "MAVEN"
        nodejs "NODE"
    }
    
    stages {
        stage('Rodar testes UI') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'refactor/estrutura-projeto']], userRemoteConfigs: [[url: 'https://github.com/vemser/vs12-provas-qa-ui']]])
                sh "npm i"
                sh "npm i -g allure-commandline"
                sh "npx cypress run --reporter mocha-allure-reporter"
                sh "npx allure generate --clean -o allure-results-ui"
            }
        }
        stage('Rodar testes API') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'develop']], userRemoteConfigs: [[url: 'https://github.com/vemser/vs12-provas-qa-api']]])
                sh "mvn clean test"
                sh "allure generate --clean -o allure-results-api"
            }
        }
    }

    post {
        always {
            script {
                sh "cp -r allure-results-ui/. allure-results/"
                sh "cp -r allure-results-api/. allure-results/"
            }
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }
    }

}