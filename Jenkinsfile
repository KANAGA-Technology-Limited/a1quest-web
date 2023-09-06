pipeline {
    agent any
    tools {
        nodejs '20.5.1'
    }
    
    stages {
        stage('Git') {
            steps {
                git branch: 'main', url: 'https://github.com/KANAGA-Technology-Limited/a1quest-web'
            }
        }
    
    
        stage('Test npm') {
            steps {
                sh 'npm version'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('build application') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Install something') {
            steps {
                sh 'npm install -g serve'
            }
        }
        
        stage('start application') {
            steps {
                sh 'npx serve out -p 3050'
            }
        }
    }
}

