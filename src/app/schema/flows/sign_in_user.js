
export default [{"type":"component","props":{"componentName":"usr.forms.SignInForm","componentInstance":"signInForm"},"events":[{"name":"onCreateNew","targets":[{"type":"component","props":{"forwardPath":"auth/sign_up"}}]},{"name":"onSubmit","targets":[{"type":"userFunction","props":{"functionName":"usr.api.authenticationFunctions.authUser"},"events":[{"name":"error","targets":[{"type":"component","props":{"componentName":"usr.forms.SignInForm","componentInstance":"signInForm","propertyName":"error"}}]},{"name":"inputErrors","targets":[{"type":"component","props":{"componentName":"usr.forms.SignInForm","componentInstance":"signInForm","propertyName":"inputErrors"}}]},{"name":"isLoading","targets":[{"type":"component","props":{"componentName":"usr.forms.SignInForm","componentInstance":"signInForm","propertyName":"isLoading"}}]},{"name":"success","targets":[{"type":"component","props":{"forwardPath":"main"}}]}]}]}]}];