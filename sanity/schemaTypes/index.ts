import { type SchemaTypeDefinition } from 'sanity'

import company from './company'
import contact from './contact'
import social from './social'
import icon from './icon'
import servicesSection from './servicesSection'
import project from './project'
import testimonial from './testimonial'
import hero from './hero'
import about from './about'
import value from './value'
import processStep from './processStep'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    company,
    contact,
    social,
    icon,
    servicesSection,
    project,
    testimonial,
    hero,
    about,
    value,
    processStep,
  ],
}