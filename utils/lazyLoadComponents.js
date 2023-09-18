function lazyLoadComponents(components) {
    // Função para carregar o script de um componente remoto
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    // Função para verificar se um elemento está visível na viewport
    // function isElementVisible(element) {
    //     const rect = element.getBoundingClientRect();
    //     const windowHeight =
    //         window.innerHeight || document.documentElement.clientHeight;
    //     const windowWidth =
    //         window.innerWidth || document.documentElement.clientWidth;

    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= windowHeight &&
    //         rect.right <= windowWidth
    //     );
    // }

    // Função para carregar o script do componente remoto quando necessário
    function lazyLoadComponent(componentId) {
        const component = components[componentId];

        if (component && !component.loaded) {
            const element = document.getElementById(componentId);
            if (element/* && isElementVisible(element)*/) {
                loadScript(component.url).then(() => {
                    component.loaded = true;
                    component.onLoaded(`Componente ${componentId} carregado com sucesso !`)
                });
            }
        }
    }

    // Criar um IntersectionObserver para verificar quando os elementos estão visíveis na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                lazyLoadComponent(entry.target.id);
            }
        });
    });

    // Adicionar a classe "lazy-component" para cada elemento que está preparado para receber o componente remoto
    Object.keys(components).forEach((componentId) => {
        const element = document.getElementById(componentId);
        if (element) {
            element.classList.add("lazy-component");
            const component = components[componentId];

            if(component.lazyLoad) {
                observer.observe(element);
            } else {
                loadScript(component.url).then(() => {
                    component.loaded = true;
                    component.onLoaded(`Componente ${componentId} carregado com sucesso !`)
                });
            }
        }
    });
}
