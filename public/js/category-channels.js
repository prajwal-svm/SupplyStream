document.addEventListener('DOMContentLoaded', function () {
    const categoryElements = document.querySelectorAll('[data-category-uri]');


    categoryElements.forEach(async (categoryElement) => {
        const categoryUri = categoryElement.dataset.categoryUri;
        const channelsContainer = document.querySelector(`[data-channel-uri="${categoryUri}"]`);
        const loader = channelsContainer ? channelsContainer.querySelector('.loader') : null;
        console.log("categoryElement:", channelsContainer);

        try {
            const response = await fetch(`/api/category-channels?categoryUri=${encodeURIComponent(categoryUri)}`);
            const channels = await response.json();
            console.log("channels:", channels, channelsContainer);

            if (channelsContainer) {
                channels.forEach(channel => {
                    const channelElement = document.createElement('div');
                    channelElement.classList.add('inline-block', 'mx-2');
                    channelElement.innerHTML = `
                        <div class="relative">
                            <div class="category-image-wrapper">
                                <img src="${channel.pictures.base_link}" alt="${channel.name.replaceAll("\"", "")}" class="w-48 h-48 object-cover rounded-full mb-1">
                                <div class="category-overlay">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-0 left-0 right-0 font-bold bg-opacity-50 py-2 px-4 rounded-b-full">
                            <p class="text-white text-center truncate max-w-[195px]" title="${channel.name}">${channel.name}</p>
                        </div>
                    `;
                    channelsContainer.appendChild(channelElement);
                });
            }

            // Set up scroll buttons for each category
            const scrollLeftButton = document.getElementById(`scrollLeft-${categoryUri}`);
            const scrollRightButton = document.getElementById(`scrollRight-${categoryUri}`);
            if (scrollLeftButton && scrollRightButton && channelsContainer) {
                scrollLeftButton.addEventListener('click', () => {
                    channelsContainer.scrollBy({
                        left: -200,
                        behavior: 'smooth'
                    });
                });
                scrollRightButton.addEventListener('click', () => {
                    channelsContainer.scrollBy({
                        left: 200,
                        behavior: 'smooth'
                    });
                });
            }
        } catch (error) {
            console.log("Error:", error);
        }

        if (loader) {
            loader.style.display = 'none';
        }
    });
});
