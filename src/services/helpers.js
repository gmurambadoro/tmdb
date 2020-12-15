export function imageUrl(configuration, backdropPath) {
    if (configuration === null) {
        return null;
    }

    const {base_url} = configuration;
    const [imgSize] = configuration['backdrop_sizes'];

    return `${base_url}${imgSize}${backdropPath}`;
}