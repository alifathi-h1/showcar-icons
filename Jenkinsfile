pipeline {
  agent none

  options {
    timestamps()
    disableConcurrentBuilds()
    preserveStashes(buildCount: 5)
  }

  environment {
    AWS_DEFAULT_REGION='eu-west-1'
    SERVICE="showcar-icons"
  }

  stages {
    stage('Build') {
      agent { node { label 'build-as24assets' } }

      steps {
        sh 'echo "Build some stuff..."'
        sh './deploy/build.sh'
        stash includes: 'dist/**/*', name: 'output-dist'
      }
    }

    stage('DeployProd') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH="master"
      }

      agent { node { label 'deploy-as24assets' } }

      steps {
        sh 'echo "DeployProd..."'
        unstash 'output-dist'
        sh './deploy/deploy.sh'
      }
    }
  }

  post {
    failure {
        echo 'Pipeline failed 💣'
        slackSend channel: 'bsg-ignition-alerts', color: '#FF0000', message: "💣 ${env.JOB_NAME} [${env.BUILD_NUMBER}] failed. (<${env.BUILD_URL}|Open>)"
    }
  }
}
