# QA Testing Sample (dpm-qa-testing-sample)

## Set up environment
```bash
# Install Node.js LTS
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install YARN
sudo npm install -g yarn

# Install Quasar CLI
npm install -g @quasar/cli

# Install dependencies using YARN
yarn
```

## Run the E2E Cypress tests
### In the interactive testrunner
```bash
quasar test --e2e cypress-open
```
### In the command line testrunner
```bash
quasar test --e2e cypress-run
```
