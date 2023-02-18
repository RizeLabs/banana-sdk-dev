# banana-sdk-dev

## Workflow for making changes to the sdk

1. This repo contains two folder `example-project` and `banana-wallet-sdk` the folder `example-project` contains a test react app through which you can test the changes you are doing inside the sdk.

2. The `banana-wallet-sdk` folder as the name depicts is used for managing sdk.

3. We have a slightly different workflow for developing sdk now, As we have to keep both things package and test react-app isolated from each other.

4. To start using the package into the example project you need to create a `symbolic link` for the package. This linking helps us to use package locally. To to this

```
// go inside sdk folder
cd banana-wallet-sdk

// inside sdk folder create a symbolic link for the package using the command
npm link
```

5. After this you need to link this symbolic link of package to your react-app project. For the scope of this repo we can do it as.

```
// go inside project foler
cd example-project

// link the package to the react-app using
npm link @rize-labs/banana-wallet-sdk
```

6. Now you can start making changes to the sdk and start testing it using example project.
