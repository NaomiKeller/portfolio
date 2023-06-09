/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Import components
 */
import contactEdit from './edit';
import contactSave from './save';

registerBlockType("naomimoon/contact", {
    title: __( "Naomimoon Contact" ),
    description: __( "2 Column block" ),
    icon: 'dashicons dashicons-share naomimoon-icon',
    category: 'naomimoon',
    attributes: {
        heading: {
            type: 'string',
            default: ''
        },
        toggleHeading: {
            type: 'boolean',
            default: true
        },
        dataArray: {
            type: 'array',
            default: []
        }
    },
    edit: contactEdit,
    save: contactSave,
});
