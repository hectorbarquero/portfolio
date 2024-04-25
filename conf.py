# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Technical writer portfolio'
copyright = '2024, Hector Barquero'
author = 'Hector Barquero'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = []

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinxawesome_theme'

# -- add extension from sphinx docs
extensions += ["sphinxawesome_theme.highlighting"]

html_static_path = ['_static']

# -- add css override 
html_css_files = [
    'css/custom.css'
]

# -- add logo placement, if needed
# html_logo = 'images/imagename.png'

