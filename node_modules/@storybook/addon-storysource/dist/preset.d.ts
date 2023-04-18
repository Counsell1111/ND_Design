declare function webpack(webpackConfig?: {
    module: {
        rules: unknown[];
    };
}, options?: {
    loaderOptions: {};
    rule: {};
}): {
    module: {
        rules: unknown[];
    };
};

export { webpack };
