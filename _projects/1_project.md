---
layout: page
title: Differentiable OFDFT
description: Automatic differentiation meets orbital-free density functional theory
img: 
importance: 1
category: OFDFT
related_publications: true
---

[Automatic differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation) (AD) is an indispensable utility of modern machine 
learning libraries. In the realm of scientific computing, AD has been leveraged to accelerate prototyping and unlock new opporunities
previously obscured by the need for tedious and, at times, intractably complicated pen-and-paper derivatives. 
The [PROFESS-AD](https://github.com/profess-dev/profess-ad) software {% cite tan2023automatic %} is one such example, where I applied AD
to the field of [orbital-free density functional theory](https://pubs.acs.org/doi/10.1021/acs.chemrev.2c00758) (OFDFT).

OFDFT is an approximate way to get to the quantum mechanical results of the more computationally-demanding Kohn-Sham DFT (KSDFT), that does
involve orbitals, at a much cheaper cost. (OFDFT scales linearly with the number of atoms with a small prefactor, while conventional KSDFT 
scales cubically) Central to OFDFT is the energy density functional, that is, a single scalar quantity that depends on the electron density,
a scalar field in 3D space (often defined on a grid). The ground state solution for the atomistic system in question is a variational one where
the ground state electron density is the one that minimizes the energy functional - reminiscent of the loss function to be minimized for typical
machine learning problems. PROFESS-AD leverages this link, taking advantage of the AD capabilities and gradient-based optimization utilities of
PyTorch to build its engine for orbital-free density functional optimizations. A toy model is shown below to illustrate the density optimization
process.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/ofdft_qho_opt.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Orbital-free electron density optimization for a one-particle quantum harmonic oscillator.
</div>
