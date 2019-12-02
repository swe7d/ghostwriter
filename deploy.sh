cd client

if [[ -z "${HEROKU_APP_NAME}" ]]; then
  export REACT_APP_API="http://localhost:9000/api/"
else
  export REACT_APP_API="https://${HEROKU_APP_NAME}.herokuapp.com/api/"
fi
npm install 
npm run-script build 
cd ..