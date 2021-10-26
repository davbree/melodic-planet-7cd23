import * as React from 'react';
import classNames from 'classnames';


export default function Action(props) {
    const { type, label, altText, url, showIcon } = props;
    const icon = props.icon || 'arrowLeft';
    const iconPosition = props.iconPosition || 'right';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props.annotationPrefix || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const defaultStyle = type === 'Link' ? 'link' : 'secondary';
    const style = props.style || defaultStyle;
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <>
            {label && <span>{label}</span>}
            {showIcon && IconComponent && (
                <IconComponent
                    className={classNames('fill-current h-5 w-5', {
                        'order-first': iconPosition === 'left',
                        'mr-1.5': label && iconPosition === 'left',
                        'ml-1.5': label && iconPosition === 'right'
                    })}
                />
            )}
        </>
    );
}
