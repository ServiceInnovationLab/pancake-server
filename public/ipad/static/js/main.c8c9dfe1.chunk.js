(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    10: function(e, t, a) {
      e.exports = a.p + 'static/media/tick.bd37d876.svg';
    },
    11: function(e, t, a) {
      e.exports = a(24);
    },
    17: function(e, t, a) {},
    24: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(8),
        s = a.n(c),
        i = (a(17), a(3)),
        l = function(e) {
          var t = new Date().getFullYear() - 1,
            a =
              new Date().getFullYear() -
              2 +
              '/' +
              (new Date().getFullYear() - 1),
            n = e.application,
            c = n.full_name,
            s = n.occupation,
            i = n.address,
            l = n.ratesBill,
            o = n.noOfDependants,
            u = n.spouse_or_partner,
            m = n.total_income;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'controlsBackground' },
              r.a.createElement(
                'div',
                { className: 'controls' },
                r.a.createElement(
                  'button',
                  { className: 'next', onClick: e.onNext },
                  'NEXT',
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'text-content' },
              r.a.createElement('h1', null, 'Application Summary'),
              r.a.createElement(
                'p',
                { className: 'summary' },
                'Please check these details for your rebate claim.',
              ),
              r.a.createElement(
                'p',
                null,
                'My name is ',
                r.a.createElement('strong', null, c),
                ' and my occupation is ',
                r.a.createElement('strong', null, s),
                '.',
              ),
              r.a.createElement(
                'p',
                null,
                'My address is ',
                r.a.createElement('strong', null, i),
                ' and I lived here on 1 July ',
                t,
                '. I have not moved within this rating year.',
              ),
              r.a.createElement(
                'p',
                null,
                'My ',
                t,
                ' rates bill (including water) is ',
                r.a.createElement('strong', null, '$', l),
                '.',
              ),
              r.a.createElement(
                'p',
                null,
                'I have ',
                r.a.createElement('strong', null, o),
                ' dependant(s).',
              ),
              u
                ? r.a.createElement(
                    'p',
                    null,
                    'The combined income of myself and my [partner or joint home owner] living with me on 1 July ',
                    a,
                    ' for the ',
                    a,
                    ' tax year was ',
                    r.a.createElement('strong', null, '$', m),
                    '.',
                  )
                : r.a.createElement(
                    'p',
                    null,
                    'My income for the ',
                    a,
                    ' tax year was ',
                    r.a.createElement('strong', null, '$', m),
                    '.',
                  ),
            ),
          );
        },
        o = a(9),
        u = a.n(o),
        m = function(e) {
          var t = Object(n.useState)(!1),
            a = Object(i.a)(t, 2),
            c = a[0],
            s = a[1],
            l = null;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'controlsBackground' },
              r.a.createElement(
                'div',
                { className: 'controls' },
                r.a.createElement(
                  'button',
                  { className: 'back', name: 'sign', onClick: e.back },
                  'GO BACK',
                ),
                r.a.createElement(
                  'button',
                  {
                    className: 'next',
                    name: 'sign',
                    onClick: function() {
                      l.isEmpty()
                        ? s(!0)
                        : (s(!1), e.next({ signature: l.toDataURL() }));
                    },
                  },
                  e.nextButtonLabel,
                ),
              ),
            ),
            r.a.createElement(
              'div',
              { className: 'text-content' },
              r.a.createElement('h1', null, e.title),
              r.a.createElement('p', { className: 'summary' }, e.subheading),
              r.a.createElement(
                'div',
                { className: 'signature' },
                r.a.createElement(
                  'div',
                  { className: 'wrap-signature' },
                  c &&
                    r.a.createElement(
                      'p',
                      { className: 'signature-error' },
                      'Please sign before you proceed',
                    ),
                  r.a.createElement(u.a, {
                    ref: function(e) {
                      l = e;
                    },
                    penColor: '#369',
                    canvasProps: {
                      width: '750px',
                      height: '200px',
                      className: 'sigCanvas',
                    },
                    onBegin: function() {
                      return s(!1);
                    },
                  }),
                ),
                'applicant' === e.declaration &&
                  r.a.createElement(p, { data: e.application }),
                'witness' === e.declaration &&
                  r.a.createElement(d, { data: e.witness }),
              ),
            ),
          );
        },
        p = function(e) {
          return r.a.createElement(
            'p',
            { className: 'signatureSection' },
            'I, ',
            r.a.createElement('strong', null, e.data.full_name),
            ' of ',
            r.a.createElement('strong', null, e.data.address),
            ', occupation ',
            r.a.createElement('strong', null, e.data.occupation),
            ' solemnly and sincerely declare that I believe the information I have given on this form is true and correct, and I make this solemn declaration conscientiously believing the same to be true and virtue of the Oaths and Declarations Act 1957.',
          );
        },
        d = function(e) {
          var t = new Date().toLocaleDateString('en-NZ', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return r.a.createElement(
            'p',
            { className: 'signatureSection' },
            'Declared at ',
            r.a.createElement('strong', null, e.data.location),
            ' this\xa0',
            r.a.createElement('strong', null, t),
            ' before me ',
            r.a.createElement('strong', null, e.data.name),
            ', ',
            r.a.createElement('strong', null, e.data.occupation),
            '.',
          );
        },
        E = (a(6),
        function(e) {
          return r.a.createElement(
            'div',
            { className: 'wrap-system-msg' },
            r.a.createElement(
              'p',
              { className: 'system-msg system-msg--processing' },
              e.message,
            ),
            r.a.createElement(
              'div',
              { className: 'sk-fading-circle' },
              r.a.createElement('div', { className: 'sk-circle1 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle2 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle3 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle4 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle5 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle6 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle7 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle8 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle9 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle10 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle11 sk-circle' }),
              r.a.createElement('div', { className: 'sk-circle12 sk-circle' }),
            ),
          );
        }),
        f = function(e) {
          var t = e.task,
            a = e.title,
            n = e.errorTitle;
          return r.a.createElement(
            r.a.Fragment,
            null,
            t.pending && r.a.createElement(E, { message: a }),
            t.error &&
              r.a.createElement(
                'div',
                { className: 'wrap-system-msg' },
                r.a.createElement(
                  'p',
                  { className: 'system-msg system-msg--error' },
                  n,
                ),
                r.a.createElement(
                  'button',
                  {
                    className: 'next',
                    onClick: function() {
                      return t.start();
                    },
                  },
                  'Try Again',
                ),
              ),
          );
        },
        g = a(1),
        N = function(e, t) {
          switch (t.type) {
            case 'RECEIVED_TOKEN':
              return Object(g.a)({}, e, {
                token: t.data.token,
                witness: t.data.witness,
                currentScreen: 'FETCH-APPLICATION',
              });
            case 'FETCHED_APPLICATION':
              return Object(g.a)({}, e, {
                currentScreen: 'CONFIRM-APPLICATION',
                application: t.application,
              });
            case 'CONFIRMED_APPLICATION':
              return Object(g.a)({}, e, { currentScreen: 'SIGN-APPLICANT' });
            case 'APPLICANT_SIGNED':
              return Object(g.a)({}, e, {
                currentScreen: 'SIGN-WITNESS',
                signatureApplicant: t.signature,
                signatureWitness: '',
              });
            case 'CANCEL_APPLICANT_SIGN':
              return Object(g.a)({}, e, {
                currentScreen: 'CONFIRM-APPLICATION',
                signatureApplicant: '',
                signatureWitness: '',
              });
            case 'WITNESS_SIGNED':
              return Object(g.a)({}, e, {
                currentScreen: 'SUBMITTING-APPLICATION',
                signatureWitness: t.signature,
                readyToSubmit: !0,
              });
            case 'CANCEL_WITNESS_SIGN':
              return Object(g.a)({}, e, {
                currentScreen: 'SIGN-APPLICANT',
                signatureApplicant: '',
                signatureWitness: '',
              });
            case 'APPLICATION_SUBMITTED':
              return Object(g.a)({}, e, { currentScreen: 'THANK-YOU' });
            default:
              throw new Error('Unhandled action type ' + t.type);
          }
        },
        b = a(2),
        v = a.n(b),
        y = a(4),
        I = (a(7),
        { started: !1, pending: !1, error: null, start: null, result: null }),
        h = function(e, t) {
          switch (t.type) {
            case 'init':
              return I;
            case 'ready':
              return Object(g.a)({}, e, { start: t.start });
            case 'start':
              return Object(g.a)({}, e, {
                started: !0,
                pending: !0,
                error: !1,
              });
            case 'result':
              return Object(g.a)({}, e, { pending: !1, result: t.result });
            case 'error':
              return Object(g.a)({}, e, { pending: !1, error: t.error });
            default:
              throw new Error('Unhandled action type: '.concat(t.type));
          }
        },
        k = function(e, t) {
          var a = Object(n.useReducer)(h, I),
            r = Object(i.a)(a, 2),
            c = r[0],
            s = r[1];
          return (
            Object(n.useEffect)(function() {
              var a = !0,
                n = (function() {
                  var n = Object(y.a)(
                    v.a.mark(function n() {
                      var r;
                      return v.a.wrap(
                        function(n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (((n.prev = 0), !t[0])) {
                                  n.next = 7;
                                  break;
                                }
                                return s({ type: 'start' }), (n.next = 5), e();
                              case 5:
                                (r = n.sent),
                                  a && s({ type: 'result', result: r });
                              case 7:
                                n.next = 12;
                                break;
                              case 9:
                                (n.prev = 9),
                                  (n.t0 = n.catch(0)),
                                  s({ type: 'error', error: n.t0 });
                              case 12:
                              case 'end':
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[0, 9]],
                      );
                    }),
                  );
                  return function() {
                    return n.apply(this, arguments);
                  };
                })();
              return (
                t[0] && s({ type: 'ready', start: n }),
                function() {
                  s({ type: 'init' }), (a = !1);
                }
              );
            }, t),
            c
          );
        },
        w = function(e, t) {
          var a = e && e.start,
            r = e && e.result;
          Object(n.useEffect)(
            function() {
              return a && a(), function() {};
            },
            [a],
          ),
            Object(n.useEffect)(
              function() {
                r && t(r);
              },
              [r],
            );
        };
      var S = function(e, t, a) {
          var n = k(
            Object(y.a)(
              v.a.mark(function t() {
                var a, n;
                return v.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          fetch('/api/v1/rebate_forms/?jwt='.concat(e))
                        );
                      case 2:
                        return (a = t.sent), (t.next = 5), a.json();
                      case 5:
                        return (
                          (n = t.sent),
                          t.abrupt('return', {
                            full_name: n.data.attributes.fields.full_name,
                            occupation: n.data.attributes.fields.occupation,
                            address: n.data.attributes.fields.location,
                            ratesBill: n.data.attributes.fields.total_rates,
                            noOfDependants: n.data.attributes.fields.dependants,
                            spouse_or_partner:
                              'yes' ===
                              n.data.attributes.fields.spouse_or_partner,
                            total_income:
                              n.data.attributes.fields.income.total_income,
                            moved_within_rating_year:
                              'yes' ===
                              n.data.attributes.fields.moved_within_rating_year,
                          })
                        );
                      case 7:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            ),
            a,
          );
          return w(n, t), n;
        },
        A = function(e, t, a) {
          var n = k(
            Object(y.a)(
              v.a.mark(function t() {
                var a, n, r, c, s, i, l;
                return v.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = e.token),
                          (n = e.signatureApplicant),
                          (r = e.signatureWitness),
                          (c = e.application),
                          (s = e.witness),
                          (i = {
                            data: {
                              token: ''.concat(a),
                              signatures: [
                                {
                                  image: n,
                                  name: c.full_name,
                                  role: c.occupation,
                                  type: 'applicant',
                                },
                                {
                                  image: r,
                                  name: s.name,
                                  role: s.occupation,
                                  type: 'witness',
                                },
                              ],
                            },
                          }),
                          (t.next = 4),
                          fetch('/api/v1/rebate_forms/sign', {
                            method: 'POST',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'omit',
                            headers: { 'Content-Type': 'application/json' },
                            redirect: 'follow',
                            referrer: 'no-referrer',
                            body: JSON.stringify(i),
                          }).then(function(e) {
                            if (e.status >= 200 && e.status < 300) return e;
                            var t = new Error(e.statusText);
                            throw ((t.response = e), t);
                          })
                        );
                      case 4:
                        return (l = t.sent), (t.next = 7), l.json();
                      case 7:
                        return t.abrupt('return', t.sent);
                      case 8:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            ),
            a,
          );
          return w(n, t), n;
        },
        O = a(10),
        T = a.n(O);
      var C = function() {
        var e = Object(n.useReducer)(N, {}),
          t = Object(i.a)(e, 2),
          a = t[0],
          c = t[1];
        Object(n.useEffect)(function() {
          var e = new URLSearchParams(window.location.search).get('t');
          try {
            var t = (function(e) {
              var t = e.split('.')[1],
                a = decodeURIComponent(
                  atob(t)
                    .split('')
                    .map(function(e) {
                      return (
                        '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2)
                      );
                    })
                    .join(''),
                );
              return JSON.parse(a);
            })(e);
            c({
              type: 'RECEIVED_TOKEN',
              data: { token: e, witness: t.witness },
            });
          } catch (a) {
            console.log(a);
          }
        }, []);
        var s = S(
            a.token,
            function(e) {
              c({ type: 'FETCHED_APPLICATION', application: e });
            },
            [a.token],
          ),
          o = A(
            a,
            function() {
              c({ type: 'APPLICATION_SUBMITTED' });
            },
            [a.readyToSubmit],
          );
        return r.a.createElement(
          'div',
          { className: 'App' },
          r.a.createElement(
            'header',
            null,
            r.a.createElement('h2', null, 'Rates Rebate 2018/2019'),
          ),
          r.a.createElement(
            'div',
            { className: 'content' },
            r.a.createElement(f, {
              task: s,
              title: 'Retrieving application...',
              errorTitle: 'Error while retrieving application',
            }),
            r.a.createElement(f, {
              task: o,
              title: 'Submitting application...',
              errorTitle: 'Error while submitting application',
            }),
            'CONFIRM-APPLICATION' === a.currentScreen &&
              r.a.createElement(l, {
                application: a.application,
                onNext: function() {
                  return c({ type: 'CONFIRMED_APPLICATION' });
                },
              }),
            'SIGN-APPLICANT' === a.currentScreen &&
              r.a.createElement(m, {
                declaration: 'applicant',
                nextButtonLabel: 'NEXT',
                application: a.application,
                title: 'Applicant signature',
                subheading: 'Please sign to complete your application',
                next: function(e) {
                  return c({
                    type: 'APPLICANT_SIGNED',
                    signature: e.signature,
                  });
                },
                back: function() {
                  return c({ type: 'CANCEL_APPLICANT_SIGN' });
                },
              }),
            'SIGN-WITNESS' === a.currentScreen &&
              r.a.createElement(m, {
                declaration: 'witness',
                nextButtonLabel: 'SUBMIT',
                application: a.application,
                witness: a.witness,
                title: 'Witness signature',
                subheading:
                  'Signature of person authorised to witness this declaration',
                next: function(e) {
                  return c({ type: 'WITNESS_SIGNED', signature: e.signature });
                },
                back: function() {
                  return c({ type: 'CANCEL_WITNESS_SIGN' });
                },
              }),
            'THANK-YOU' === a.currentScreen &&
              r.a.createElement(
                'div',
                { className: 'endScreen' },
                r.a.createElement('h1', null, 'Thank you'),
                r.a.createElement(
                  'p',
                  { className: 'summary' },
                  'This declaration is now complete and ready to be processed.',
                ),
                r.a.createElement('img', {
                  src: T.a,
                  alt: 'tick',
                  className: 'img-tick',
                }),
              ),
          ),
        );
      };
      s.a.render(r.a.createElement(C, null), document.getElementById('root'));
    },
    6: function(e, t, a) {},
  },
  [[11, 1, 2]],
]);
//# sourceMappingURL=main.c8c9dfe1.chunk.js.map
