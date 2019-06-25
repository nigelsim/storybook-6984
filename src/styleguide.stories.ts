import { storiesOf } from '@storybook/angular';

storiesOf('Site Styles', module)
    .add('Fonts and Typography', () => ({
        template: `
    <p>The following heading hierarchy and text styling is used to communicate context within the site.</p>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th class="col-xs-3">Type</th>
                <th class="col-xs-3">Value</th>
                <th class="col-xs-6">Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Modal header - used for all dialogues. See the following section for additional classes to further style these headings.
                </td>
                <td>
                    &lt;h3 class="modal-title"&gt;
                </td>
                <td>
                    <h3 class="modal-title">The Title of the Modal</h3>
                </td>
            </tr>
            <tr>
                <td>
                    Section header - used to title sections of a container.
                </td>
                <td>
                    &lt;h4 class="section-heading"&gt;&lt;span&gt;Person Details&lt;/span&gt;&lt;div&gt;&lt;/div&gt;
                </td>
                <td>
                    <h4 class="section-heading"><span>Person Details</span><div></div></h4>
                </td>
            </tr>
            <tr>
                <td>
                    Heading within a section
                </td>
                <td>
                    &lt;h4&gt;
                </td>
                <td>
                    <h4>Address Details</h4>
                </td>
            </tr>
            <tr>
                <td>
                    Sub-Heading within a section
                </td>
                <td>
                    &lt;h5&gt;
                </td>
                <td>
                    <h5>Australian Addresses</h5>
                </td>
            </tr>
            <tr>
                <td>Normal copy</td>
                <td>&lt;p&gt;</td>
                <td><p>Text sample</p></td>
            </tr>
            <tr>
                <td>Help copy</td>
                <td>&lt;p class="help-block"&gt;</td>
                <td><p class="help-block">Help text sample</p></td>
            </tr>
            <tr>
                <td>Control Label</td>
                <td>&lt;label&gt;</td>
                <td><label>Control X</label></td>
            </tr>
            <tr>
                <td>Value Label</td>
                <td>&lt;span class="display-label&gt;</td>
                <td><span class="display-label">Control X</span></td>
            </tr>
        </tbody>
    </table>
        `
    }));
