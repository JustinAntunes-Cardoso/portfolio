import { useEffect, useRef } from 'react';
import './Badges.scss';
import { Badge } from '../../utils/types';

const Badges = ({ src, badgeId, badgeHost }: Badge) => {
    const badgesRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;

        const credlyBadgeDiv = document.createElement('div');
        credlyBadgeDiv.dataset.iframeWidth = '150';
        credlyBadgeDiv.dataset.iframeHeight = '270';
        credlyBadgeDiv.dataset.shareBadgeId = badgeId;
        credlyBadgeDiv.dataset.shareBadgeHost = badgeHost;

        const currentBadgesRef = badgesRef.current; // Store the current value of the ref

        if (currentBadgesRef) {
            currentBadgesRef.appendChild(credlyBadgeDiv);
            document.body.appendChild(script);

            return () => {
                // Use the variable inside the cleanup function
                currentBadgesRef.removeChild(credlyBadgeDiv);
            };
        }
    }, [src, badgeId, badgeHost]);

    return (
        <section className='badges' ref={badgesRef}>
            {/* Your other content here */}
        </section>
    );
};

export default Badges;