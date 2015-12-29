# Ember-cli-ripple-effect

A simple wrapper component that displays a ripple effect when clicked, then
passes the click event to the underlying wrapped element.

## Installation

* `ember install ember-cli-ripple-effect`

## Usage

In your template, just wrap your element inside the helper.

          {{#ripple-effect}}
          <button {{action "foobar"}}>Foo Bar!</button>
          {{/ripple-effect}}

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
