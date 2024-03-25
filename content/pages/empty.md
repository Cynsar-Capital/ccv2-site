---
type: PageLayout
title: We are coming up with a product
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Capital at work
      color: text-dark
    subtitle: Automated Funds Management
    text: >
      The days of managing funds with outdated 1970s-style spreadsheets are
      over. Consolidate all your funds and let them work effortlessly without
      you needing to lift a finger. We handle everything else for you.
    actions:
      - type: Button
        label: Read updates
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
      - type: Link
        label: Use Cases
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    media:
      type: ImageBlock
      url: /images/hero3.svg
      altText: Dope design preview
    badge:
      type: Badge
      label: Making
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
  - type: GenericSection
    title:
      type: TitleBlock
      text: While we are busy building
      color: text-dark
    subtitle: Subscribe to our product updates
    text: >
      Stay updated on our product developments regarding open-source capital
      management by subscribing to our updates.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
      action: /.netlify/functions/submission_created
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: Get in touch
      color: text-primary
    colors: bg-light-fg-dark
slug: empty
isDraft: false
seo:
  type: Seo
  metaTitle: Landing Page
  metaDescription: Write here your new page's description including most relevant keywords.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---
