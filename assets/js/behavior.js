---
layout: none # compress
---

'use strict';

document.body.classList.add('js');

{% include_relative partials/service-worker--register.js %}
{% include_relative partials/js--event--eventType.js %}
{% include_relative partials/body--scroll.js %}
{% include_relative partials/utility--initializer.js %}

{% include_relative partials/external-links.js %}
{% include_relative partials/js--animation--reveal.js %}
{% include_relative partials/js--child--link.js %}
{% include_relative partials/js--dismissible.js %}
{% include_relative partials/js--toggle-below.js %}
{% include_relative partials/js--copy-above.js %}
