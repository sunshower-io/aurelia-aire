pipeline {
    environment {
        MVN_REPO = credentials('artifacts-credentials')
        GITHUB = credentials('github-build-credentials')
        NPM = credentials('npm-credentials')
        NPM_DETAILS = credentials('npm-details')
    }
    agent {
        docker {
            image 'sunshower/ui-image:1.0.1'
            args "-u 1000 --privileged"
        }
    }

    stages {
        stage('Check Commit Message for Skip Condition') {
            steps {
                skipRelease action: 'check', forceAbort: false
            }
        }

        stage('Build and increment') {
            steps {
                sh "npm run dependencies build test"
            }
        }

        stage('POMs') {
            when {
                branch 'master'
                expression {
                    env.SKIP_BUILD == "false"
                }
            }

            stages {
                stage('Build and Deploy Release POMs') {


                    steps {
                        sh "git tag -d \$(git tag -l)"
                        /**
                         * Set Git Config
                         */

                        sh "git config user.name '$GITHUB_USR'"
                        sh "git config user.email '${GITHUB_USR}@sunshower.io'"
                        sh "git remote set-url origin https://${GITHUB_USR}:${GITHUB_PSW}@github.com/sunshower-io/aurelia-aire"

                        sh "npm-login-noninteractive -u ${NPM_USR} -p ${NPM_PSW} -e ${NPM_DETAILS_USR} "
                        /**
                         * release
                         */

                        sh "npm run release-aire"
                        sh "git checkout -b tmp"
                        sh "git commit -am 'releasing [skip-release]'"
                        sh "git checkout origin/master"

                        sh "git merge tmp"
                        sh "git branch -d tmp"

                        /**
                         * push
                         */
                        sh "git push -u origin HEAD:master"

                    }
                }
            }
        }
    }
}
