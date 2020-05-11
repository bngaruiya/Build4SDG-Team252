# Build for SDG - TEAM 252 Project
The team is building a crop disease classification application. The application uses a resnet-152 to classify 15 different crop disease categories based on images obtained from the plant village Dataset.
The classifier can be found at this [Crop Disease Classifier Repo](https://github.com/bngaruiya/CropDiseaseClassifier).

## Django Backend
### Usage
To consume the above API, you will need a models file that is saved once you run through the classifier repo above. Alternatively, on the group channel I have shared my gdrive folder where you could download the model_transfer.pt and classes.json files. 
Clone this repository. Navigate to the PredictAPI. Under this is a class_models folder. Paste the two files above into this folder

#### To configure the project:
- On the terminal window, navigate to the root Crop DPA folder and configure your python environment by running
    `pipenv shell`
- Install the required depedencies by running
    `pipenv install`
- Navigate into the API folder by running
    `cd API`
-Start the django server by running 
    `python manage.py runserver`

#### Testing the API
- Navigate to `localhost/api/predict`. It should give you an option to upload an image. Note: Dont Fill the prediction column. This will be populated by the model. Later on I will get rid of this column. 
- Download an image of a plant leaf suffering from any of the disease classes defined in the classes.json file.
- Upload it to the server for classification and confirm that the classification is correct.

## React Frontend
### Usage
The react frontend is built bottom up from a django app. This is efficient as it ensures that both the frontend and backed run on the same server.

#### Configuration
- On a new terminal window, navigate to the project root directory. Activate the project environment by running `python shell`.
- Ensure that you have nodejs installed. Initialize a new nodejs project by running `npm init`.
- Install the requisite depedencies by running `npm install`.

#### Testing the full stack application
- Ensure your django backend is running as explained above by running `python manage.py runserver`.
- On another terminal:
    1. If during development, to run the react frontend execute `npm run dev`.
    2. If during production, to run the react frontend execute `npm run build`.