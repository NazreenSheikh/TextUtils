import { R as e, r as t, a } from './vendor.ecb5e9e5.js.js'
!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
    new MutationObserver((e) => {
      for (const a of e)
        if ('childList' === a.type)
          for (const e of a.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
    }).observe(document, { childList: !0, subtree: !0 })
  }
  function t(e) {
    if (e.ep) return
    e.ep = !0
    const t = (function (e) {
      const t = {}
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      )
    })(e)
    fetch(e.href, t)
  }
})()
const r = (t) =>
    e.createElement(
      'nav',
      { className: `navbar navbar-expand-lg navbar-${t.mode} bg-${t.mode}` },
      e.createElement(
        'div',
        { className: 'container-fluid' },
        e.createElement(
          'a',
          { className: 'navbar-brand', href: '#' },
          'TextUtils',
        ),
        e.createElement(
          'button',
          {
            className: 'navbar-toggler',
            type: 'button',
            'data-bs-toggle': 'collapse',
            'data-bs-target': '#navbarSupportedContent',
            'aria-controls': 'navbarSupportedContent',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation',
          },
          e.createElement('span', { className: 'navbar-toggler-icon' }),
        ),
        e.createElement(
          'div',
          {
            className: 'collapse navbar-collapse',
            id: 'navbarSupportedContent',
          },
          e.createElement(
            'ul',
            { className: 'navbar-nav me-auto mb-2 mb-lg-0' },
            e.createElement(
              'li',
              { className: 'nav-item' },
              e.createElement(
                'a',
                { className: 'nav-link', href: '#' },
                t.home,
              ),
            ),
          ),
          e.createElement(
            'div',
            { className: 'form-check form-switch' },
            e.createElement('input', {
              className: 'form-check-input',
              type: 'checkbox',
              id: 'flexSwitchCheckDefault',
              onClick: t.ToggleMode,
            }),
            e.createElement('label', {
              className: 'form-check-label',
              htmlFor: 'flexSwitchCheckDefault',
            }),
          ),
        ),
      ),
    ),
  l = (a) => {
    const [r, l] = t.exports.useState('')
    return e.createElement(
      'div',
      {
        className: `text-${'light' === a.mode ? 'dark' : 'light'} bg-${a.mode}`,
      },
      e.createElement(
        'div',
        { className: 'container ' },
        e.createElement(
          'button',
          { className: 'btn btn-warning my-2', onClick: (e) => l('') },
          'Reset',
        ),
        e.createElement(
          'div',
          { className: 'mb-3' },
          e.createElement('textarea', {
            className: `form-control bg-${
              'light' === a.mode ? 'light' : 'secondary'
            }  my-3 text-${'light' === a.mode ? 'dark' : 'light'}`,
            value: r,
            placeholder: 'Enter text',
            onChange: (e) => {
              l(e.target.value)
            },
            id: 'myBox',
            rows: '8',
          }),
          e.createElement(
            'button',
            {
              className: 'btn btn-warning mx-2 my-1',
              onClick: () => {
                let e = r.toUpperCase()
                l(e), a.showAlert('converted to Uppercase', 'success')
              },
            },
            'convert to UpperCase',
          ),
          e.createElement(
            'button',
            {
              className: 'btn btn-warning mx-2 my-1',
              onClick: () => {
                let e = r.toLowerCase()
                l(e), a.showAlert('converted to Lowercase', 'success')
              },
            },
            'convert to Lowercase',
          ),
          e.createElement(
            'button',
            {
              className: 'btn btn-warning mx-2 my-1',
              onClick: () => {
                let e = r.split(/[ ]+/).join(' ')
                l(e), a.showAlert('Extra Spaces removed', 'success')
              },
            },
            'remove extra Spaces',
          ),
        ),
      ),
      e.createElement(
        'div',
        { className: 'container' },
        e.createElement('h4', null, 'Summary of your Text'),
        e.createElement(
          'p',
          null,
          r.split(/[ ]+/).length - 1,
          ' words and ',
          r.length,
          ' characters',
        ),
        e.createElement(
          'p',
          { className: 'text-muted' },
          Math.round(0.008 * (r.split(' ').length - 1)),
          'm read time',
        ),
        e.createElement('h5', { className: 'mt-4 ' }, 'Preview'),
        e.createElement(
          'p',
          { className: 'mt-3 ' },
          '' === r ? 'Enter something in textbox to preview here' : r,
        ),
      ),
    )
  },
  n = (t) =>
    t.alert &&
    e.createElement(
      'div',
      null,
      e.createElement(
        'div',
        {
          className: `alert alert-${t.alert.type} alert-dismissible fade show`,
          role: 'alert',
        },
        e.createElement(
          'strong',
          null,
          ((e) => {
            const t = e.toLowerCase()
            return t.charAt(0).toUpperCase() + t.slice(1)
          })(t.alert.type),
        ),
        ': ',
        t.alert.msg,
        e.createElement('button', {
          type: 'button',
          className: 'btn-close',
          'data-bs-dismiss': 'alert',
          'aria-label': 'Close',
        }),
      ),
    )
function o() {
  const [a, o] = t.exports.useState('light'),
    [s, c] = t.exports.useState(null),
    m = (e, t) => {
      c({ msg: e, type: t }),
        setTimeout(() => {
          c(null)
        }, 1500)
    }
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(r, {
      home: 'Home',
      mode: a,
      ToggleMode: () => {
        'light' === a
          ? (o('dark'),
            (document.body.style.backgroundColor = '#212529'),
            m('Dark mode has been set', 'success'))
          : (o('light'),
            m('Light mode has been set', 'success'),
            (document.body.style.backgroundColor = 'white'))
      },
    }),
    e.createElement(n, { alert: s }),
    e.createElement(l, { mode: a, showAlert: m, title: 'TextUtils' }),
  )
}
a.render(
  e.createElement(e.StrictMode, null, e.createElement(o, null)),
  document.getElementById('root'),
)
