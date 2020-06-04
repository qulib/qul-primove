# QUL Primo VE skin
This is the front end for QUL's Primo VE front end (to be launched Dec.10, 2019)

## First step
1. You'll need to create a zip file of the directory with the same name (01OCUL_QU:QU_DEFAULT.zip). Make sure there are no extra files (e.g. .DS_Store) as these will cause an error during upload.

## To activate in Alma
1. Go to Configure Views
1. Edit the "Queen's University" view (aka 01OCUL_QU:QU_DEFAULT)
1. Choose the "Manage Customization Package" tab
1. Under "Upload Package", browse to the zip file you created and click "Upload"
1. Hit the "Save" button (neat the top of the screen).

The skin should now be live in Primo VE.

# The Primo New UI Customization Workflow Development Environment

## Package documentation

The development package allows you to configure :

- css

- images

- html

- JavaScript

- The root directory of the package should be named either by the `viewCode` or `CENTRAL_PACKAGE` in case of a consortia level package
- Whether you develop a consortia level package or a view level package the process remains the same
- Once deployed the hierarchy is as follows:
    1. For css - use the cascading ability of css and load the consortia level (CENTRAL_PACKAGE) css first and the view level css afterwards
    2. For images and html - the system checks for every file if it exists in each level - and prefers the view level file if exists
    3. For JavaScript - the two package types define 2 different Angular modules:
        - ```var app = angular.module('viewCustom', ['angularLoad']);```
        - ```var app = angular.module('centralCustom', ['angularLoad']);```

  and loads both of the modules,

- For each configuration type there is a specified folder in the custom package folder (that can be downloaded form your Primo Back Office)
- In each folder you will find a specific README.md file with recipes/examples.

  [CSS](./01OCUL_QU-QU_DEFAULT/css/README.md "css documentation")

  [HTML](./01OCUL_QU-QU_DEFAULT/html/homepage/README.md "html documentation")

  [Images](./01OCUL_QU-QU_DEFAULT/img/README.md "images documentation")

  [JavaScript](./01OCUL_QU-QU_DEFAULT/js/README.md "javascript documentation")

-  For `colors.json.txt` instructions - please see [CSS](./01OCUL_QU-QU_DEFAULT/css/README.md "css documentation") documentation









