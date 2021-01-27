# DIALOGUE-FRONTEND-VENDOR
Vendor Web administration & Dashboard

## How to install
+ Please install `Node` first
+ Run command `npm install` or `yarn` to genereate `/node_modules`
+ Website running with command `npm run start` or `yarn start` and you can check at `localhost:3000/`

## Feature
+ [ ] Dashboard Vendor (Soon)
+ [ ] Management (Soon)

## Live
+ [ ] Production (Soon)
+ [ ] Staging (Soon)

### Development Flow (staging)
- checkout new feature branch for feature development, from master branch, example: ``f_johndoe_your_feature``
- submit pull request from feature_branch ``f_johndoe_your_feature`` to staging
- if conflict, checkout new mc branch from staging, example ``mc_stg_f_johndoe_your_feature``
- pull from feature branch
- submit pull request from ``mc_stg_f_johndoe_your_feature`` to staging branch
 

### Development Flow (production)
- checkout new feature branch for feature development, from master branch, example: ``f_johndoe_your_feature``
- make sure you have submit your changes to staging
- submit pull request from feature_branch ``f_johndoe_your_feature`` to master branch
- if conflict, pull from master to your feature branch
- submit pull request, from feature branch to staging 
- after merged in staging, submit pull request to master
- make sure you have done testing in staging, before submit PR to master 

### Branch naming convention
- new feature : `f_yournickname_feateurename` 
- bugfix : `b_yournickname_bugname`
- improvement : `i_yournickname_improvement_name`
- conflict staging : `mc_stg_yournickname_yourbranch`