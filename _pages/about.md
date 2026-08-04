---
layout: page
title: About
permalink: /
subtitle: "Computational Materials<br>PhD @ Harvard"
hide_header: true

profile:
  align: left
  image: profile_pic.jpeg
  image_circular: false # crops the image to make it circular
  more_info: >

social: true # includes social icons in the about header
---

<div class="about-layout" id="about">
  <div class="about-left">
    {% assign profile_image_path = page.profile.image | prepend: 'assets/img/' %}
    <img class="about-avatar" src="{{ profile_image_path | relative_url }}" alt="{{ page.profile.image }}" loading="eager">
    <h1 class="about-name">
      {% if site.title == 'blank' %}
        <span class="font-weight-bold">{{ site.first_name }}</span> {{ site.middle_name }}
        {{ site.last_name }}
      {% else %}
        {{ site.title }}
      {% endif %}
    </h1>
    <p class="about-subtitle">{{ page.subtitle }}</p>
    {% if site.email %}
      <p class="about-email">
        <a href="mailto:{{ site.email | encode_email }}">{{ site.email }}</a>
      </p>
    {% endif %}
    {% if page.social %}
      <div class="social">
        <div class="contact-icons">{% include social.liquid %}</div>
        <div class="contact-note">{{ site.contact_note }}</div>
      </div>
    {% endif %}
  </div>
  <div class="about-right">
<div class="about-copy" markdown="1">

I'm a third year PhD researcher in the [Materials Intelligence Research](https://mir.g.harvard.edu/) (MIR) group, advised by [Boris Kozinsky](https://mir.g.harvard.edu/people/boris-kozinsky).
My research interests lie at the intersection of atomistic materials modelling, electronic structure and artificial intelligence.
Much of my PhD work has been on [deep learning interatomic potentials](/#deep-learning-interatomic-potentials).
I am to build robust and scalable interatomic potential models, from their underlying deep learning architectures and training methods, to GPU performance engineering, and the software systems that enable efficient computation and automated workflows.

Prior to my PhD, I was a senior research assistant in the group of [Yee Sin Ang](https://www.sutd.edu.sg/profile/ang-yee-sin) at the Singapore University of Technology and Design, where I worked on [computational materials screening for nanoelectronics applications](/#computational-materials-screening).

I completed my BA in Physics and MPhil in Materials Science at the University of Cambridge. During my time at the [Materials Theory Group](https://www.mtg.msm.cam.ac.uk/), I developed [methods for orbital-free density functional simulations](/#orbital-free-density-functional-theory) under the supervision of [Chuck Witt](https://www.mtg.msm.cam.ac.uk/People/dr-w-chuck-witt) and [Chris Pickard](https://www.msm.cam.ac.uk/people/pickard).

</div>
  </div>
</div>

<span id="research" class="section-anchor"></span>

<nav class="research-subnav">
  <a href="#deep-learning-interatomic-potentials">MLIPs</a>
  <a href="#computational-materials-screening">Materials Screening</a>
  <a href="#orbital-free-density-functional-theory">OFDFT</a>
</nav>

<div class="research-copy" markdown="1">

### Deep Learning Interatomic Potentials

<div class="row">
    <div class="col-md-12 mt-3 mt-md-0">
        <p>
            Machine learning interatomic potentials (MLIPs) based on deep equivariant neural networks achieve quantum-accurate results, but realizing their full potential requires careful attention to software design and computational efficiency.
            I led the redesign of the <a href="https://github.com/mir-group/nequip">NequIP</a> software framework for <strong>deep equivariant graph neural network potentials</strong>, focusing on robustness, extensibility, and performance. The rewrite achieved <em>5× speedups</em> for training and <em>5–18× speedups</em> for molecular dynamics simulations. These optimizations enabled the construction of our first set of <strong>foundation potentials</strong>, among the fastest for materials, available at <a href="https://www.nequip.net/">nequip.net</a>.
        </p>
    </div>
</div>

<div class="software-grid">
    {% include repository/software_card.liquid repository="mir-group/nequip" %}
    {% include repository/software_card.liquid repository="mir-group/allegro" %}
</div>

<div class="row mt-2">
    <div class="col-md-12">
        <div class="research-refs">
            {% bibliography --query @*[key=tan2026high]* --group_by none --template bib_research_ref %}
            {% bibliography --query @*[key=kavanagh2026fast]* --group_by none --template bib_research_ref %}
        </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-md-12 mt-3 mt-md-0">
        <p>
            Building on the NequIP software infrastructure, I support and maintain a variety of extension packages that extend the capabilities of our MLIP architectures to new modeling capabilities.
        </p>
    </div>
</div>

<div class="software-grid">
    {% include repository/software_card.liquid repository="mir-group/allegro-pol" %}
    {% include repository/software_card.liquid repository="mir-group/nequip-nac" %}
</div>

<div class="row mt-2">
    <div class="col-md-12">
        <div class="research-refs">
            {% bibliography --query @*[key=falletta2025unified]* --group_by none --template bib_research_ref %}
            {% bibliography --query @*[key=gomes2026machine]* --group_by none --template bib_research_ref %}
            {% bibliography --query @*[key=nascimento2026mixture]* --group_by none --template bib_research_ref %}
        </div>
    </div>
</div>

### Computational Materials Screening

<div class="row">
    <div class="col-md-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/uwbg_cover.png" class="img-fluid rounded z-depth-1 research-cover" alt="Computational materials screening cover" zoomable=true %}
    </div>
    <div class="col-md-8 mt-3 mt-md-0">
        <p>
            Computational materials discovery often prioritizes device performance while overlooking materials-level sustainability.
            To address this, I developed a sustainability-guided materials screening protocol and applied it to ultrawide bandgap layered materials.
            This work identified 25 low-risk, sustainable ultrawide bandgap layered candidate <strong>semiconductors</strong> through <em>in silico</em> materials screening for <strong>nanoelectronic device</strong> applications, such as dielectric, power-electronics, and ultraviolet-photonics.
        </p>
        <div class="research-refs">
            {% bibliography --query @*[key=tan2023toward]* --group_by none --template bib_research_ref %}
        </div>
    </div>
</div>

### Orbital-Free Density Functional Theory

<div class="row">
    <div class="col-md-6 mt-3 mt-md-0">
        <p>
            Orbital-free density functional theory (OFDFT) is a promising method for faster, more large-scale atomistic simulations.
            My prior work involves method development for OFDFT, including a differentiable OFDFT code, <a href="https://github.com/profess-dev/profess-ad">PROFESS-AD</a>.
        </p>
        <div class="research-refs">
            {% bibliography --query @*[key=tan2023automatic]* --group_by none --template bib_research_ref %}
            {% bibliography --query @*[key=witt2021random]* --group_by none --template bib_research_ref %}
        </div>
    </div>
    <div class="col-md-6 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid path="assets/img/ofdft_qho_2d.gif" class="img-fluid rounded z-depth-1" alt="OFDFT density optimization animation" %}
    </div>
</div>

</div>

{% include repository/software_card_js.liquid %}
{% include section_nav_js.liquid %}
