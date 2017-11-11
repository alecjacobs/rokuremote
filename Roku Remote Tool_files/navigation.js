(function() {

    var resource = {
    	"en_US": {
            'how-it-works': 'How it works',
            'whatson': 'See what\'s on',
            'support': 'Support',
            'products': 'Products',
            "social.blog": "Blog",
            "social.facebook": "Facebook",
            "social.twitter": "Twitter",
            "social.youtube": "YouTube",
            "legal.nowthisistv": "Roku: Now this is TV",
            "legal.sitemap": "Site Map",
            "legal.privacy": "Privacy policy",
            "legal.tos": "Terms of use",
            "legal.dispute": "Dispute resolution",
            "legal.trademark": "Trademark guidelines",
            "legal.legal":"Legal",
            "legal.copyright.symbol": "©",
            "legal.copyright.rokuinc": "Roku, Inc.",
            "legal.copyright.allrightsreserved": "All rights reserved.",
            "legal.copyright.text": "ROKU, the ROKU Logo, ROKU TV, ROKU POWERED, \"Streaming Stick,\" \"HAPPY STREAMING\" and \"NOW THIS IS TV\" are trademarks and/or registered trademarks of Roku, Inc. in the United States."
    	},
    	"en_CA": {
            'how-it-works': 'How it works',
            'whatson': 'See what\'s on',
            'support': 'Support',
            'products': 'Products',
            "social.blog": "Blog",
            "social.facebook": "Facebook",
            "social.twitter": "Twitter",
            "social.youtube": "YouTube",
            "legal.nowthisistv": "Roku: Now this is TV",
            "legal.sitemap": "Site Map",
            "legal.privacy": "Privacy policy",
            "legal.tos": "Terms of use",
            "legal.dispute": "Dispute resolution",
            "legal.trademark": "Trademark guidelines",
            "legal.legal":"Legal",
            "legal.copyright.symbol": "©",
            "legal.copyright.rokuinc": "Roku, Inc.",
            "legal.copyright.allrightsreserved": "All rights reserved.",
            "legal.copyright.text": "ROKU, the ROKU Logo, ROKU TV, ROKU POWERED, \"Streaming Stick,\" \"HAPPY STREAMING\" and \"NOW THIS IS TV\" are trademarks and/or registered trademarks of Roku, Inc. in the United States."
    	},
    	"fr_CA": {
            'how-it-works': 'Comment ça fonctionne',
            'whatson': 'Explorez les canaux',
            'support': 'Assistance',
            'products': 'Choisissez votre lecteur',
            "social.blog": "Blog",
            "social.facebook": "Facebook",
            "social.twitter": "Twitter",
            "social.youtube": "YouTube",
            "legal.nowthisistv": "Roku: Now this is TV",
            "legal.sitemap": "Plan du site",
            "legal.privacy": "Politique de confidentialité mise à jour",
            "legal.tos": "Conditions d'utilisation",
            "legal.dispute": "Politique de violation de droits d’auteur",
            "legal.trademark": "Directives de Roku en Matière de Marques",
            "legal.legal":"Légal",
            "legal.copyright.symbol": "©",
            "legal.copyright.rokuinc": "Roku, Inc.",
            "legal.copyright.allrightsreserved": "",
            "legal.copyright.text": "Tous les droits sont réservés.ROKU, le ROKU Logo, ROKU READY, ROKU TV, ROKU POWERED, le ROKU READY logo, \"Streaming Stick,\" \"HAPPY STREAMING\" et \"NOW THIS IS TV\" sont des marques commerciales et/ou des marques déposées de Roku, Inc. aux États-Unis."
    	},
    	"en_IE": {
            'how-it-works': 'How it works',
            'whatson': 'See what\'s on',
            'support': 'Support',
            'products': 'Products',
            "social.blog": "Blog",
            "social.facebook": "Facebook",
            "social.twitter": "Twitter",
            "social.youtube": "YouTube",
            "legal.nowthisistv": "Roku: Now this is TV",
            "legal.sitemap": "Site Map",
            "legal.privacy": "Privacy policy",
            "legal.tos": "Terms of use",
            "legal.dispute": "Dispute resolution",
            "legal.trademark": "Trademark guidelines",
            "legal.legal":"Legal",
            "legal.copyright.symbol": "©",
            "legal.copyright.rokuinc": "Roku, Inc.",
            "legal.copyright.allrightsreserved": "All rights reserved.",
            "legal.copyright.text": "ROKU, the ROKU Logo, ROKU TV, ROKU POWERED, \"Streaming Stick,\" \"HAPPY STREAMING\" and \"NOW THIS IS TV\" are trademarks and/or registered trademarks of Roku, Inc. in the United States."
    	},
    	"en_GB": {
            'how-it-works': 'How it works',
            'whatson': 'See what\'s on',
            'support': 'Support',
            'products': 'Products',
            "social.blog": "Blog",
            "social.facebook": "Facebook",
            "social.twitter": "Twitter",
            "social.youtube": "YouTube",
            "legal.nowthisistv": "Roku: Now this is TV",
            "legal.sitemap": "Site Map",
            "legal.privacy": "Privacy policy",
            "legal.tos": "Terms of use",
            "legal.dispute": "Dispute resolution",
            "legal.trademark": "Trademark guidelines",
            "legal.legal":"Legal",
            "legal.copyright.symbol": "©",
            "legal.copyright.rokuinc": "Roku, Inc.",
            "legal.copyright.allrightsreserved": "All rights reserved.",
            "legal.copyright.text": "ROKU, the ROKU Logo, ROKU TV, ROKU POWERED, \"Streaming Stick,\" \"HAPPY STREAMING\" and \"NOW THIS IS TV\" are trademarks and/or registered trademarks of Roku, Inc. in the United States."
    	},
    	"fr_FR": {
            'how-it-works': 'Comment ça fonctionne',
            'whatson': 'Découvrez nos chaînes',
            'support': 'Assistance',
            'products': 'Choisissez votre lecteur',
            "social.blog": "Blog",
            "social.facebook": "Facebook",
            "social.twitter": "Twitter",
            "social.youtube": "YouTube",
            "legal.nowthisistv": "Roku: Now this is TV",
            "legal.sitemap": "Plan du site",
            "legal.privacy": "Politique de confidentialité mise à jour",
            "legal.tos": "Conditions d'utilisation",
            "legal.dispute": "Politique de violation de droits d’auteur",
            "legal.trademark": "Directives de Roku en Matière de Marques",
            "legal.legal":"Légal",
            "legal.copyright.symbol": "©",
            "legal.copyright.rokuinc": "Roku, Inc.",
            "legal.copyright.allrightsreserved": "",
            "legal.copyright.text": "Tous droits réservés.ROKU et le logo ROKU sont des marques de commerce et/ou des marques déposées de Roku, Inc. aux États-Unis."
    	},
    	"es_MX": {
            'how-it-works': 'Cómo funciona',
            'whatson': 'Explorar canales',
            'support': 'Soporte técnico',
            'products': 'Escoge tu reproductor',
            "social.blog": "Blog",
            "social.facebook": "Facebook",
            "social.twitter": "Twitter",
            "social.youtube": "YouTube",
            "legal.nowthisistv": "Roku: Now this is TV",
            "legal.sitemap": "Mapa del sitio",
            "legal.privacy": "Política de privacidad",
            "legal.tos": "Términos de uso",
            "legal.dispute": "Resolución de disputas",
            "legal.trademark": "Directrices de las Marcas Comerciales de Roku",
            "legal.legal":"Legal",
            "legal.copyright.symbol": "©",
            "legal.copyright.rokuinc": "Roku, Inc.",
            "legal.copyright.allrightsreserved": "",
            "legal.copyright.text": "Todos los derechos reservados.ROKU, el logotipo de ROKU, ROKU READY, ROKU TV, ROKU POWERED, el logotipo de ROKU READY, \"STREAMING STICK,\" \"HAPPY STREAMING\" y \"NOW THIS IS TV\" son marcas comerciales y/o registradas de Roku, Inc. en los Estados Unidos y en otros países."
    	},
    };

    $( window ).resize(function() {
        if(!isMobile()) {
            $('.roku-logo img')
            .attr('src', 'data:image/png;base64,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');
        } else{
            $('.roku-logo img')
            .attr('src', 'data:image/png;base64,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')
        }
    });

    var isMobile = function() {
        return ($(window).width() <= 768) ? true : false;
    }

    var getMessages = function(locale) {
    	var messages = resource[locale.language.toLowerCase() + '_' + locale.country.toUpperCase()];
    	if(!messages) {
    		messages = resource['en_US'];
    	}
    	return messages;
    };

    var renderHeader = function(node, locale, personalized) {
    	var messages = getMessages(locale);
        var mobileMenuState = false;
        var localeStr = locale.language.toLowerCase() + '-' + locale.country.toLowerCase();
        var headerLinks = {
            'how-it-works' : 'https://www.roku.com/'+localeStr+'/how-it-works',
            'whatson' : 'https://www.roku.com/'+localeStr+'/whats-on',
            'products' : 'https://www.roku.com/'+localeStr+'/products/compare',
            'support' : 'https://support.roku.com/hc/'+localeStr
        };
        $(node).html('');
        var mobileCloseToggleCloseContent = '<span class="roku-header-toggle-button"><span class="roku-header-toggle-bar"></span><span class="roku-header-toggle-bar"></span><span class="roku-header-toggle-bar"></span></span>';
        var $header = $('<div id="roku-header"><div class="roku-logo"></div><div class="roku-feature-links hide-in-mobile"><div class="roku-feature-links-container"></div></div><div class="roku-header-toggle"></div></div>').appendTo($(node));
        $('<div class="roku-header-mobile-menu"><div class="roku-header-mobile-menu-content"></div></div>').appendTo($(node));
        $('.roku-header-toggle').html(mobileCloseToggleCloseContent);
        $('<a href="https://www.roku.com/' + localeStr + '" title="Roku"><img/></a>').appendTo($('.roku-logo', $header));

        if(!isMobile()) {
            $('.roku-logo img')
            .attr('src', 'data:image/png;base64,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');
        } else{
            $('.roku-logo img')
            .attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAeCAYAAAA8cnC3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAQ5UlEQVRo3u1ad3SU1bb/fWW+6TWTSoAQihACEjqidEJvNhAuT0XEiwqKPq9exatiRdH34FIUgauAIIhCKAJJIIhIT+gQEsAQEhKSycxk+nztvD9CgMnMBOX5Lsu13l4r/3w75+yz9+/seoaa1mH+rwCaAnDjNkQIoRUcEzQn6MvadGtykmGpn9t0Td7cfVjb6tut/X+KTtS0DvPtAMy/dQEhBGJQgtvhB6Ng0CI9zteud7Mvxszs8Z7JYrDfbYX+jPS7QbixkAJkGfA4/RCDElLvjXdkTuny2MCJGTvvtlJ/NqKjMSiagiwRuO1+uGr8cNv9CHgFEAKAAgipA0JvVsOSqEfJ6Srzmjl7dqz/dO+Td1upPxux0RiSKIPlaKFlp4RSBcfIMoHC4/AnlJ23qVRaDiotB0IIgLoQZYrXwWP3Y/vnR1bk5xbZuwxqk3W3lfuzUFQQvM4AWmYkXpn5+agOcckW/69nr3LFR642dVZ7H/5p/em3nde8Kr1JBVm+DoRMoLOo4aj0YN2He+fbKp27rQmm2yZ7APjvZ37QTnqrv5UQoig8VObasvCQ/ZPdT4t32zj/LooKAiEEDEuJcckWPwC0SEviAVwEMDdnVX7eji/zd1SVOs0ag+qmR8gE5ngtSk5da7533ekpAOZH2/94XnHbSyevPXbml9I+Fwoq2s8Zt9ZAURQkQZJUOq5s2WvbjzRta91qSdRt6jakXSDaPhsX/RLrsfvfCbiDKpqhhVt5AS+vT24be2bMs/e935gRclcXPFBWZJtC0bSbokBu5dE0JQe8vJ5maFGhYv1EJiEhXOQlpcao9HbNbPVZq07J5Q33Liq4EnNyT8nfnNVeM6di/bfyZEnW6kzqi1FBoCgKskQY2zUna403hdzKwZO7HP7u072ztyw+tEgUJDDszXMRAAoli4Kci09EAqH8UlVy1oJDn3z+0o4JlRftMFg1UChZiLwEAoBhaAS8Qpudy/Pb0AwzKbVTfEXu6vzZg/7SZUWkcx7ZUpRQVeqc7rzmBcsxITxXjQ+dM1udOpJ97qNume2kSOt3rTn2wKb5B3JLTlVxaj0XwqNpCq4aH6zJBqLScKipcFO36goAAQ8Pa7JBTGoZ8y2AMBCuXqyJzV15fEbZeZtaY1CG8AReQnxzU1lUEG7CRSJ+Hj6t6zcFORffKD1TlaQ1qW4ySF1S97kCKcXHy5q17pRcWs/auvTg2HmPb1xXfr6GU2pZxKeYb3hRQ+UsiQaIooyS01WJX72xa/m8KRvG39s/9ZHBkzu7bv0/nVnt93t4XpYJxypCQaBoClqjUogGQO7qggFZCw5uspW5uKRWlhtnqQeg1uZDSnp8cNJb/Ub8vOHMLJ87OKKhIYM6DsZYraxQMkIkGQolyxusGtHs1EKtD10r8hIMMRpX1OrodqTVa2q1RuVFiqHCeAxLg8gwnf3lcpP6b9/O3fP09/P2b6y85OAsiTqodcoQpRsSIQQMQ8FgUUOpVuBAVmHmoS2FeZcLKxND7ogk39H5d31z7IGsBQd32Mpq9QarJuQs1HUAtCaVPOPzUcN7j0nfdSG/IlapUdypuRqlOwYBAIhMVCBReZJKpxIA4Fhe8YM7l+Uv5QMiDFbNjWQO1IU9SZThqw3A4/Aj4BPqYhpVDwbAcDQsiTqcyPu18xeztm+8VU7Ay//uc+euLui3af7+XdVXahX6GA2I3MADqrzQWzT89H8OH9mue/PdAKDScjRFU79b1h8CQrTLWl3ubFNdVptGUeEHE3kJnJqt7pKZml92sVq1+u28xT4PD51ZFaIwRVHgAwJ4v4D2fVL29hnf4WtzvLbS4/QjBNzrIc4Yp8X5Q2U9vp+/74N6ls8V/H0ArCoYmPXPg1tt5W6FMU4bDoDNB2OcVn78vQGjugxos72ep9Sw0Y3xv6TGcwIBOFXkf8n+Kv/FyksOrTFWG/KdoiiIgoS4ZsbD1kQzWfl2zpslp6virU0MDQAAhKAIUZQx5aPBr/SfkDEPAC6eLLds+GRfzrHcS50NsZqbYJA6I2mMKmxbfPhlr9v3jVavOSPyElhlI2rcckdyVuX327TgwA57hYc1WEM9oD4E6S1qccqHg4b3GJ6WE3WjP5iiegKRCTg1GzRa9GH1+gcT176et+bUdL1FA7qBi0qiBJqh0XlI6/kAcGbf5akqrSIs/hMCuOx+9H+s44p6AACgZccm9qfnDZsQ29zoCHjCQ41Gr4S90sNlf3VsMgDEJBlEkY+Yd6+bjpIBIPvr/J5ZCw7m2MpdrD5GHQ5AtRdGqybw1MeZI8MBAID/Gy9oFARWycDnCpp++v5EZvbqo/fvWHF48MIZWdM/mPjtvuL8ivfFoASWY0I8lKIo2Cvc6DW27dYBEzrt3rRw/+NlRTVxKi0Xtr/fwyMhxeQbOrXzxw15lnhD8aC/dFriqvGHrSOEQGtU4sDmwvEAcE/3Jn5vbdQ2Apyatf+y+fTALYsObbFXuFljbHgIctX4YLRq8Ph7A0f3GNbu3z77iurHGr0S1WWupLXv7t2pUNYZWwgIcNv90BpVoJVUiDIAUF1Wi5adky6Mf63v0zMXAc4qT3evMwCtSRV2kWRJRtO02ANJLWLPR5JvbWbIiWtmfJ0PiGEhUaFk4bH7mx7LK26av/OCS6FkwAfCG2y1XonyoprO6z/8+TtntdccKQm7anzQm1TypLf7j+o1qn0O7gJFT8xUXdwO+gR4HAF4nQGIIoHOrAZFUzc94Ho0sl2pRauMxJIpHw4eGd/UXAkA1aW196j1yoieTGSCpvdYD0QTb47TFcSnmMoiGZdmaABgTu0pae+x+wOKKDlBoWTgqPRYa20+s0bPhV2agE9AXHOje8LsvsP6PNjxx7sBQOMgkLrwolAyN/6YCD2BLBEIvIQR07uvfHH52LR23ZufB4DVc3axQZ9gZhSRRQi8BEuivjKa+LSeKS6aptyyGN4H0HQdiDUVbrPASyLNRE6aRCZgOQacig0rbAgh8DoDuP/h9CUDJmRk3y0AGgWBoimIvISgr64RFIJi5AqNEAgBES06JBxOSrHeCOIUC4C6TTYjpNGSgwCNFyX15fEd5EyKoqAzq7FnzckZ+TnnR/8BtrzjzB0VBCEowhSv9SW0tGTLkryJpukqSZDQsGGhGRoMS+Obd/PmlxZdS6//Pun1gaJGr7RLQuSOVqFkUVPuTowm/9S+SyYiE+P10BNCskxA0RRimujtCiXDylJk/WmaghCU4HUGQhrAeuLULOyVHvWCZzZnHdtTPPKOLH99dsmwdMRDEJmAus1ljAqCrzaIhBbmy3OzpwxZdnbWuFn/GjdareeCflcQDRs0tY6D2+5jFj+/baXD5tLVf09saSn0uYIRbzNNUygtrL4/mnx7padr5SVHklIdHu9liYACxM4DU0/qLRq1EIw89fa5eaSkx53q2D9lt8vuA+RQIIhMoLeowQclzJ+ateVIduG4RoxNRVKEogCKBuuodKsjrVNqFQGaoYXG+rxGw5HL5lM4a2oZAEjvlXJo8BMZr/vcQYhCaF0uywRGqxbF+Vczti46PLf+O8sxBQarBpG8gWYolBXaelw6Xd4xkvzqK84h1WUuREq6vF+AOUn/a3rv1AqNTqkSovQJvF+APkZT8erK8QO7DWudbbvqqgOwARAGqwZ8UMKSmT+uP5J9fkxEe0QJN4yChrvGz/hcwTaR+HqTpuW1EkdMwwnvbwLhOhCUJNyM22Of7/1ZrzFtNzgqPWHeQDM0jFYNti058mzOqvyJANChb0pWYqq50u/hwy6RSsuhqrRWmb382BsN5VZdcXTaterEc8ZYTURr+D08ug1tvRYAio6Wq7VGFSIRRVNw231WAHh5+cNDeo1pm1192QlZIhE9IuAR2AXTsjYV7C4OyxFak7I20rCQVTCwV3rgdviHNuR5XN74bz/Yu8BXG4RSHX34d/vZUYMLMHnOgBlJrSzV7hpfCBCEECiULGiWxuaFBxe6nb6Etl2bOdL7pCwNeoVwR6YAg1WDfRvPPfrjssM3ZkHH8opTlr68fb2z0qtWNZxaUoDfxSMh1ext3S1pNQC47H6msVt263j7P1c8PKr3Q2k59gpPfawOBSJGDUmQseDprKyD284+fOs+zdPjTwS8PCLNykyxWvz83dmJq97J/fj4nuLWh3cUdlj1Tu5f54xdm1946EonY6y20Ynx7aeoDdbGNbFUTn534HRGQSPoF8KA0MeoUXHRaV48Y8tSABg3q+cHqRkJpY5Kb2hSJ3UG4pQM1szZ8/d/jF558pMn12/78uWdJ84dvNLaYFU36MYBWZDB+wUMearz3LTuKcVAXT4icnQFb32noCiKf2n5g0N6jrkn11bmgiRGAMKqAc9L+OKlHesObT/3YD0v7b5me2SJQIpQMrMcA5GXsHNFwSsrXsst/GZO3vG8tSeXlF+oaWK6DQC/DYQI1GNo2++HTev6Wa3NGzbPJzKBMVaDQ1uLRmUt+uXveoMuOGl236e0RqXssvlCgKj3HpVOgZLTVR1O7rk83OcOGrRGVRgAkkjgqPaix+h7csY+1/vdGwZQNK5CQwOwLEtmLB49ovdDadurLjsjA2FRI+gV6AXPbP4+f3fRWADoNTJtS/P2sSca6lAvg1MxUOk4uGp8dG21j6ZpCtrrb/D143qPww8hKIaH8jsBAQAGTr731Xv7pvzkrPaGHYpVMNBb1Pjhvw68//MPJwd06t8697E3+05U6zk0zCeEENAMDZVWAbWOCxtRUBQFPijBcc2Nrpmt9t7/UPuQMMEofr8KKrWSn7V03Kj+kzpudVzzREzW9UO+BVM3bzz449nxADDmhV6ztSYlvM5ABCDqKj5OxYJTsXVd/fURfNAvIOgXSMaglnkGq7bKbfeHDD7vGIT4pjHiEx9lTjNYNEGPIxBmWJWWQ9AnUtu/zF8uCII68z+6rpv0j34DUjrE1dgr3HW1OwAqSjNGUXXNorPKCyEoYujULuseeDQ9s/vQtiHPmwwbPR80RgzDSLOWPjiq7/j2m2zlLoiCHAEIDURRwucvbF97NOf82PtGtd/60Eu9n2cVDFzVXoi8FDFHAHXGF4ISXDU+yLKMSW/2++iVrx4Z0H9Sx/GxzYwee6UHoKi6EveR2Pcj/gKv1uZDu57Jl2ZvGN82tolFiKZM7uqCvy56busSUKFJsN7AVVW1GP541x//9vWjIwDAUeOybPzswDvn9pdOKy20cZAJtCY1WI6uCzsygeAX4XH4YU7Uo1m72LODn8x4o9eItE2R5L86aFnHayXOE44oD/1dh7Q6PfbFXhk9hrWL+hOahTOzfti25Og4lZZDwxHI9QoLFCi8sGz0K8Oe7D5v/5YzfbcuPvyvq0U1LWpr/DBaNVAoGdAMDUIIBF5EbZUX5ngdmrWPO9tpYOrzY569L69+z6KCKx1WvJazOT/7QkpK+7ir1Lcf5b0FwAQg5Ikq6BN01mTD5fsfaf+p0ayP+pAriiK9a/Xx5yov2dsoNQpvqAYgYlBSgwLXaUDqx+m9U0vqWT99dyL5/JHyhwghfYqPXk132XxxskQYpUbhi2tuvJSSHndUCIrb+j3WIbfVvU2jPhjsWnPM4nMFngt6BSXNUCGG5v2CNr6F+UL/CRlfNOIU8HuCutxV+c/6XLxFoWTC5uIUTUkuuz/OEKNxDp3aea5arfZkLdqvYBX0CGeVZ8S5A+UZzmueJgEfr6NZWrAk6Mvb9Wp6JKaJfgMIskc+0zPsAlSU2Jrv23BmpkrHXfkfiay85LLcUBwAAAAASUVORK5CYII=')
        }

        if(messages['how-it-works'] !== undefined) {
            $('<div id="product-feature-link" class="roku-feature-link-section"><a href="'+headerLinks['how-it-works']+'">'+ messages['how-it-works']+'</a></div>')
                    .appendTo($('.roku-feature-links-container', $header));
            $("<div class='roku-header-mobile-menu-item'><a href="+headerLinks['how-it-works']+">"+messages['how-it-works']+"</a></div>").appendTo($('.roku-header-mobile-menu-content'));
        }
        if(messages['whatson'] !== undefined) {
            $('<div id="product-feature-link" class="roku-feature-link-section"><a href="'+headerLinks['whatson']+'">'+messages['whatson']+'</a></div>')
                    .appendTo($('.roku-feature-links-container', $header));
            $("<div class='roku-header-mobile-menu-item'><a href="+headerLinks['whatson']+">"+messages['whatson']+"</a></div>").appendTo($('.roku-header-mobile-menu-content'));
        }
        if(messages['products'] !== undefined) {
            $('<div id="product-feature-link" class="roku-feature-link-section"><a href="'+headerLinks['products']+'">'+messages['products']+'</a></div>')
                    .appendTo($('.roku-feature-links-container', $header));
            $("<div class='roku-header-mobile-menu-item'><a href="+headerLinks['products']+">"+messages['products']+"</a></div>").appendTo($('.roku-header-mobile-menu-content'));
        }
        if(messages['support'] !== undefined) {
            $('<div id="product-feature-link" class="roku-feature-link-section"><a href="'+headerLinks['support']+'">'+messages['support']+'</a></div>')
                    .appendTo($('.roku-feature-links-container', $header));
            $("<div class='roku-header-mobile-menu-item'><a href="+headerLinks['support']+">"+messages['support']+"</a></div>").appendTo($('.roku-header-mobile-menu-content'));
        }

        $(window).scroll(function(e) {
            if ($(window).scrollTop() > 25) {
                $('#roku-header').stop().animate({
                    top: "-300px"
                }, 100);
            }
            if($(window).scrollTop() === 0) {
                $('#roku-header').animate({
                    top: "0px"
                }, 100);
            }
        });
        var toggleMobileMenu = function(e) {
            e.stopPropagation();
            e.preventDefault();
            mobileMenuState = (mobileMenuState) ? false : true ;

            if(mobileMenuState) {
                $('.roku-header-toggle').html('x');
                $('.roku-header-mobile-menu').animate({
                    left: "0px"
                }, 100);
            }else {
                $('.roku-header-toggle').html(mobileCloseToggleCloseContent);
                $('.roku-header-mobile-menu').animate({
                    left: "-2000px"
                }, 100);
            }
            $('.roku-header-toggle').toggleClass('roku-header-toggle-open');
        }
        $('.roku-header-toggle', $header).click(toggleMobileMenu);
    };

    var renderFooter = function(node, locale) {
    	var messages = getMessages(locale);
    	var localeStr = locale.language.toLowerCase() + '-' + locale.country.toLowerCase();
        $(node).html('');
        var $footer = $('<footer id="roku-footer"><div class="footer-section-social"><div class="roku-footer-content"></div></div><div class="footer-section-legal"><div class="roku-footer-content"></div></div></footer>')
        	.addClass(locale.language.toLowerCase() + '-' + locale.country.toLowerCase())
        	.appendTo($(node));

        var blog = $('<div class="blog"></div>')
            .appendTo($('.footer-section-social .roku-footer-content'), $footer);
        var blog_link = $('<a></a>')
            .attr('href', 'https://blog.roku.com')
            .attr('title', messages['social.blog'])
            .appendTo(blog);
        $('<span class="roku-glyphicon roku-glyphicon-new-blog"></span>')
            .appendTo(blog_link);
        $('<span></span>').html(' Roku<sup>®</sup> '+messages['social.blog'])
            .appendTo(blog_link);
        $('<span class="roku-glyphicon roku-glyphicon-chevron-right-sm"></span>')
            .appendTo(blog_link);
        var social_icons = $('<div class="social"></div>')
            .appendTo($('.footer-section-social .roku-footer-content'), $footer);
        var social_1 = $('<a class="social-icon"></a>').attr('title', messages['social.facebook'])
            .attr('href', 'https://www.facebook.com/roku')
            .appendTo(social_icons);
        $('<span class="roku-glyphicon roku-glyphicon-facebook"></span>')
            .appendTo(social_1);
        var social_2 = $('<a class="social-icon"></a>').attr('title', messages['social.twitter'])
            .attr('href', 'https://twitter.com/rokuplayer')
            .appendTo(social_icons);
        $('<span class="roku-glyphicon roku-glyphicon-twitter"></span>')
            .appendTo(social_2);
        var social_3 = $('<a class="social-icon"></a>').attr('title', messages['social.youtube'])
            .attr('href', 'https://www.youtube.com/roku')
            .appendTo(social_icons);
        $('<span class="roku-glyphicon roku-glyphicon-youtube"></span>')
            .appendTo(social_3);

        var legal_logo = $('<div class="logo"><div>').appendTo($('.footer-section-legal .roku-footer-content'), $footer);
        var legal_logo_link = $('<a></a>').attr('href', 'https://www.roku.com/' + locale.language + '-' + locale.country + '/')
            .appendTo(legal_logo);
        $('<img />').attr('src', 'images/nav_footer_logo.png')
            .attr('alt', messages['legal.nowthisistv'])
            .appendTo(legal_logo_link);

        var legal_text = $('<div class="legal-text"></div>').appendTo($('.footer-section-legal .roku-footer-content'), $footer);
        var copyright = $('<div class="copyright"></div>')
            .appendTo(legal_text);
        $('<span></span>').text(messages['legal.copyright.symbol'] + ' ' + (new Date().getFullYear()) + ' ' + messages['legal.copyright.rokuinc'] + ' ' + messages['legal.copyright.allrightsreserved'])
            .appendTo(copyright);
        $('<span class="hidden-xs"><span>').text(' ' + messages['legal.copyright.text'])
            .appendTo(copyright);
        var legal_links = $('<div class="legal-links"></div>')
            .appendTo(legal_text);
        var link_1 = $('<a></a>').attr('title', messages['legal.sitemap']).attr('href', 'https://www.roku.com/' + locale.language + '-' + locale.country + '/about/sitemap')
            .appendTo(legal_links);
        $('<span></span>').text(messages['legal.sitemap'])
            .appendTo(link_1);
        var link_2 = $('<a></a>').attr('title', messages['legal.privacy']).attr('href', 'https://docs.roku.com/doc/userprivacypolicy/' + locale.language + '-' + locale.country)
            .appendTo(legal_links);
        $('<span></span>').text(messages['legal.privacy'])
            .appendTo(link_2);
        var link_3 = $('<a></a>').attr('title', messages['legal.tos']).attr('href', 'https://www.roku.com/' + locale.language + '-' + locale.country + '/about/termsofuse')
            .appendTo(legal_links);
        $('<span></span>').text(messages['legal.tos'])
            .appendTo(link_3);
        var link_4 = $('<a></a>').attr('title', messages['legal.dispute']).attr('href', 'https://www.roku.com/' + locale.language + '-' + locale.country + '/about/disputeresolution')
            .appendTo(legal_links);
        $('<span></span>').text(messages['legal.dispute'])
            .appendTo(link_4);
        var link_5 = $('<a></a>').attr('title', messages['legal.trademark']).attr('href', 'https://docs.roku.com/doc/trademarkguidelines/' + locale.language + '-' + locale.country)
            .appendTo(legal_links);
        $('<span></span>').text(messages['legal.trademark'])
            .appendTo(link_5);
        var link_6 = $('<a></a>').attr('title', messages['legal.legal']).attr('href', 'https://www.roku.com/' + locale.language + '-' + locale.country + '/legal')
            .appendTo(legal_links);
        $('<span></span>').text(messages['legal.legal'])
            .appendTo(link_6);


        $('<p class="desc"><span>' + messages['copyright'] + '</span>&nbsp;<span class="hide-in-mobile">' + messages['copyright.html'] + '</span></p>')
            .appendTo($('.legal'), $footer);
        $('<a class="sitemap" href="//www.roku.com/' + localeStr + '/about/sitemap" title="' + messages['sitemap'] + '">' + messages['sitemap'] + '</a> | <a class="privacy" href="//docs.roku.com/doc/userprivacypolicy/' + localeStr + '" title="' + messages['privacy'] + '">' + messages['privacy'] + '</a> | <a class="tos" href="//docs.roku.com/doc/tos/' + localeStr + '" title="' + messages['tos'] + '">' + messages['tos'] + '</a> <span class="hide-in-mobile">| <a class="dmca" href="//docs.roku.com/doc/dmca/' + localeStr + '" title="' + messages['dmca'] + '">' + messages['dmca'] + '</a></span> <span class="hide-in-mobile">| <a class="eula"  href="//docs.roku.com/doc/deviceplayereula/' + localeStr + '" title="' + messages['eula'] + '">' + messages['eula'] + '</a></span> | <a class="dispute" href="//docs.roku.com/doc/disputeresolution/' + localeStr + '" title="' + messages['dispute'] + '">' + messages['dispute'] + '</a>| <a class="trademark" href="//docs.roku.com/doc/trademarkguidelines/' + localeStr + '" title="' + messages['trademark'] + '">' + messages['trademark'] + '</a>')
            .appendTo($('.legal'), $footer);
    };

    window.Roku = {};
    window.Roku.navigation = {};
    window.Roku.navigation.header = {};
    window.Roku.navigation.header.render = renderHeader;
    window.Roku.navigation.footer = {};
    window.Roku.navigation.footer.render = renderFooter;

})();
