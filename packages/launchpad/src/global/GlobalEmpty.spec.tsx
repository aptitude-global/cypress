import { defaultMessages } from '../locales/i18n'
import GlobalEmpty from './GlobalEmpty.vue'

const emptyText = defaultMessages.globalPage.empty

describe('<GlobalEmpty />', () => {
  beforeEach(() => {
    cy.mount(() => (<div
      class="p-12 min-w-280px max-w-650px overflow-auto resize-x">
      <GlobalEmpty />
    </div>))
  })

  it('renders the empty state', () => {
    cy.contains(emptyText.title)
    cy.contains(emptyText.helper)

    const parts = emptyText.dropText.split('{0}')

    cy.contains(parts[0])
    cy.contains(emptyText.browseManually)

    cy.get('input[type=file]').should('have.length', 1)
  })

  it('handles a file upload', () => {
    cy.get('input[type=file]').attachFile('project-upload.json')
    cy.get('[data-testid=upload-name]').should('have.text', 'project-upload.json')
  })
})
