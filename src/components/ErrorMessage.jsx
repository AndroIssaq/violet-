import { Formik, Form, Field } from 'formik';

const ErrorMessage = ({ name, children }) => (
    <div role="alert">
      <Formik.Consumer>
        {({ touched, errors }) =>
          touched[name] && errors[name] ? (
            <div className="flex items-center bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded mb-2">
              {children(errors[name])}
              <svg className="animate-pulse ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
            </div>
          ) : null
        }
      </Formik.Consumer>
    </div>
  );

  export default ErrorMessage;