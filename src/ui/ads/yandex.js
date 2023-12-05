import DomPresenceTracker from './../../middleware/domPresenceTracker';

const { useEffect } = React;



const YandexAdUnit = ({ blockId }) => {

    const renderTo = `yandex_rtb_${blockId}`;
    const scriptURL = 'https://yandex.ru/ads/system/context.js';

    const LOAD_script = () => {
        $script(scriptURL, "yandex");
    }

    const LOAD_adunit = (blockId, renderTo) => {
        $script.ready('yandex', () => {

            if (!window.yaContextCb) {
                window.yaContextCb = [];
            }

            window.yaContextCb.push(() => {
                if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
                    window.Ya.Context.AdvManager.renderFeed({
                        "blockId": blockId,
                        "renderTo": renderTo
                    });
                }
            });

        });
    }

    const tasks = {
        "&MOUNT": () => LOAD_script(),
        "yandex": () => LOAD_adunit(blockId, renderTo)
    };

    return <DomPresenceTracker autoUpdate={0} tasks={tasks}><div id={renderTo} /></DomPresenceTracker>;
};

export default YandexAdUnit;
