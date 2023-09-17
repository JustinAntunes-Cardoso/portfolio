import { useEffect, useRef } from 'react';
import './Badges.scss';

const Badges = () => {
    const badgesRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = '//cdn.credly.com/assets/utilities/embed.js';

        const credlyBadgeDiv = document.createElement('div');
        credlyBadgeDiv.dataset.iframeWidth = '150';
        credlyBadgeDiv.dataset.iframeHeight = '270';
        credlyBadgeDiv.dataset.shareBadgeId = '5199ef7c-1c43-44e7-9a19-065a07322c12';
        credlyBadgeDiv.dataset.shareBadgeHost = 'https://www.credly.com';

        const currentBadgesRef = badgesRef.current; // Store the current value of the ref

        if (currentBadgesRef) {
            currentBadgesRef.appendChild(credlyBadgeDiv);
            document.body.appendChild(script);

            return () => {
                // Use the variable inside the cleanup function
                currentBadgesRef.removeChild(credlyBadgeDiv);
            };
        }
    }, []);

    return (
        <section className='badges' ref={badgesRef}>
            {/* Your other content here */}
        </section>
    );
};

export default Badges;