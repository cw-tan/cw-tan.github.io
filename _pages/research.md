---
layout: page
title: Research
permalink: /research/
description: Research highlights at a glance.
nav: true
nav_order: 3
hide_header: true
subnav:
  - id: deep-learning-interatomic-potentials
    label: MLIPs
  - id: computational-materials-screening
    label: Materials Screening
  - id: orbital-free-density-functional-theory
    label: OFDFT
---

<div class="research-copy" markdown="1">

### Deep Learning Interatomic Potentials

<div class="row">
    <div class="col-md-12 mt-3 mt-md-0">
        <p>
            Machine learning interatomic potentials (MLIPs) based on deep equivariant neural networks achieve quantum-accurate results, but realizing their full potential requires careful attention to software design and computational efficiency.
            I led the redesign of the <a href="https://github.com/mir-group/nequip">NequIP</a> software framework for <strong>deep equivariant graph neural network potentials</strong>, focusing on robustness, extensibility, and performance. The rewrite achieved <em>5× speedups</em> for training and <em>5–18× speedups</em> for molecular dynamics simulations.
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
        {% include figure.liquid loading="eager" path="assets/img/uwbg_cover.png" class="img-fluid rounded z-depth-1" alt="Computational materials screening cover" zoomable=true %}
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
        <img src="{{ '/assets/img/ofdft_qho_2d.gif' | relative_url }}" class="img-fluid rounded z-depth-1" alt="OFDFT density optimization animation">
    </div>
</div>

</div>

{% include repository/software_card_js.liquid %}
