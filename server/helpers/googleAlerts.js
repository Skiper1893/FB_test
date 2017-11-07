const googleAlertsApi = require('google-alerts-api');
const {URL} = require('url');
const rss = require('../helpers/rss');

const {HOW_OFTEN, DELIVER_TO, HOW_MANY} = googleAlertsApi;

const generateCookies = () => {
  return new Promise((resolve, reject) => {
    // googleAlertsApi.generateCookies(
    //   'email',
    //   'password',
    //   (error, cookies) => {
    //     console.log(cookies);
    //     resolve(cookies);
    //   }
    // );

    resolve(
      'W3sia2V5IjoiR0FQUyIsInZhbHVlIjoiMTpjNE1pNlBmeUNoZ0l0UVRZSHNSUlJVQmdBSl9tbUg4N0JKb3hUUUYta255cmFqclZEVmM0d21ZakFlMlVVZktmc3BXc3JmVjV5eXRUS2h2aU1pMUl2UTcwZ0pVMXpBOjJ1U1RSa0duVVpyMXc5YWciLCJleHBpcmVzIjoiMjAxOS0wOC0xMlQyMTowMjo1NC4wMDBaIiwicGF0aCI6Ii8iLCJkb21haW4iOiJhY2NvdW50cy5nb29nbGUuY29tIiwiY3JlYXRpb24iOiIyMDE3LTA4LTEyVDIxOjAyOjU3LjMwOVoiLCJsYXN0QWNjZXNzZWQiOiIyMDE3LTA4LTEyVDIxOjAyOjU3Ljc0MloiLCJob3N0T25seSI6dHJ1ZX0seyJrZXkiOiJTSUQiLCJ2YWx1ZSI6IkNRVW1ldnhXUGJFRWZEb2Z4UEZPUEdNXzViQjZwaTBzUC1JTU9lUmM5c3NmRHJXNHl2b0VUYWQwZy1lUE5WQ2hEOEtHTEEuIiwiZXhwaXJlcyI6IkluZmluaXR5IiwicGF0aCI6Ii8iLCJkb21haW4iOiJnb29nbGUuY29tIiwiY3JlYXRpb24iOiIyMDE3LTA4LTEyVDIxOjAyOjU3LjczOFoiLCJsYXN0QWNjZXNzZWQiOiIyMDE3LTA4LTEyVDIxOjAyOjU3Ljc0MloiLCJob3N0T25seSI6ZmFsc2V9LHsia2V5IjoiTFNJRCIsInZhbHVlIjoiQ1FVbWVoTDdJdGF3cDkxbUd5QW9ZTFJLQWtWUl91akRSU3pYc0dPbWJxaUhsRzZjTzdDaEEtUjVHQV94ZHVzUHF2bkpBQS4iLCJleHBpcmVzIjoiSW5maW5pdHkiLCJwYXRoIjoiLyIsImRvbWFpbiI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJjcmVhdGlvbiI6IjIwMTctMDgtMTJUMjE6MDI6NTcuNzM5WiIsImxhc3RBY2Nlc3NlZCI6IjIwMTctMDgtMTJUMjE6MDI6NTcuNzQyWiIsImhvc3RPbmx5Ijp0cnVlfSx7ImtleSI6IkhTSUQiLCJ2YWx1ZSI6IkFHUDk3a3BKNTR5N2V0YlhHIiwiZXhwaXJlcyI6IkluZmluaXR5IiwicGF0aCI6Ii8iLCJkb21haW4iOiJnb29nbGUuY29tIiwiY3JlYXRpb24iOiIyMDE3LTA4LTEyVDIxOjAyOjU3LjczOVoiLCJsYXN0QWNjZXNzZWQiOiIyMDE3LTA4LTEyVDIxOjAyOjU3Ljc0MloiLCJob3N0T25seSI6ZmFsc2V9LHsia2V5IjoiU1NJRCIsInZhbHVlIjoiQWx4S2NpVVVMM2RrQXVLV2oiLCJleHBpcmVzIjoiSW5maW5pdHkiLCJwYXRoIjoiLyIsImRvbWFpbiI6Imdvb2dsZS5jb20iLCJjcmVhdGlvbiI6IjIwMTctMDgtMTJUMjE6MDI6NTcuNzM5WiIsImxhc3RBY2Nlc3NlZCI6IjIwMTctMDgtMTJUMjE6MDI6NTcuNzQyWiIsImhvc3RPbmx5IjpmYWxzZX0seyJrZXkiOiJBUElTSUQiLCJ2YWx1ZSI6IlVYOUVPUFdrbE80YVB2UC0vQTF6NGZEeFZlR0ZEZTVPZzEiLCJleHBpcmVzIjoiSW5maW5pdHkiLCJwYXRoIjoiLyIsImRvbWFpbiI6Imdvb2dsZS5jb20iLCJjcmVhdGlvbiI6IjIwMTctMDgtMTJUMjE6MDI6NTcuNzM5WiIsImxhc3RBY2Nlc3NlZCI6IjIwMTctMDgtMTJUMjE6MDI6NTcuNzQyWiIsImhvc3RPbmx5IjpmYWxzZX0seyJrZXkiOiJTQVBJU0lEIiwidmFsdWUiOiJoeTJXVlk3bXdnYXpTM094L0FWV1Z0ajhGYUVBMkdvUjNJIiwiZXhwaXJlcyI6IkluZmluaXR5IiwicGF0aCI6Ii8iLCJkb21haW4iOiJnb29nbGUuY29tIiwiY3JlYXRpb24iOiIyMDE3LTA4LTEyVDIxOjAyOjU3Ljc0MFoiLCJsYXN0QWNjZXNzZWQiOiIyMDE3LTA4LTEyVDIxOjAyOjU3Ljc0MloiLCJob3N0T25seSI6ZmFsc2V9LHsia2V5IjoiTklEIiwidmFsdWUiOiIxMDk9ZThMdzF5RWkzem9MR2xQaEZ1MzRhTmk3bnFRaWhGcEZzMzNiUG96OW9KUzN2VkFiY2R3emVFb0Zfd2c3bndRZkl1SWFJSmlPcnFGRjRWalVrWjlWY1dPc1g1UWRpVkNKRUdPQXJrR3h4S1lROHRIcTdfTW9lMmlHQWJRZFZybEZRRTZlaERQdUZEYXo2eFdYTEhNIiwiZXhwaXJlcyI6IjIwMTgtMDItMTFUMjE6MDI6NTQuMDAwWiIsInBhdGgiOiIvIiwiZG9tYWluIjoiZ29vZ2xlLmNvbSIsImNyZWF0aW9uIjoiMjAxNy0wOC0xMlQyMTowMjo1Ny43NDBaIiwibGFzdEFjY2Vzc2VkIjoiMjAxNy0wOC0xMlQyMTowMjo1Ny43NDJaIiwiaG9zdE9ubHkiOmZhbHNlfV0='
    );
  });
};

/**
 * We must login to Google Alerts first.
 * We can not login using username/password due to account security
 * restrictions.
 * Since this code will be running in the cloud, if we attempt to login with
 * username/password, Google would think that the account password was stolen.
 * To woraround this issue, we must login to Google on a trusted computer first.
 * Afterwards we will be using cookis to login to Google from a machine running
 * on the clound.
*/
generateCookies().then(cookies => {
  googleAlertsApi.configure({
    cookies,
  });
});

const createAlertByInterest = (interest) => {
  console.log(`Creating alert by interest "${interest}"`);

  return new Promise((resolve, reject) => {
    createAlert(interest, (error, alert) => {
      alert ? resolve(alert) : resolve(null);
    });
  });
};

const createAlert = (interest, callback) => {
  googleAlertsApi.sync(() => {
    const alertToCreate = {
      howOften: HOW_OFTEN.AT_MOST_ONCE_A_DAY,
      sources: [],
      lang: 'en',
      name: interest,
      region: '',
      howMany: HOW_MANY.BEST,
      deliverTo: DELIVER_TO.RSS,
      deliverToData: '',
    };

    googleAlertsApi.create(alertToCreate, callback);
  });
};

const downloadArticles = (alert) => {
  if (alert == null) {
    return Promise.resolve(null);
  }

  if (alert.hasOwnProperty('rss') == false) {
    return Promise.resolve(null);
  }

  return rss.parseURL(alert.rss).then(addArticleSources);
};

const addArticleSources = (articles) => articles.map(article =>
  Object.assign(article, attachArticleSources(article)));

const attachArticleSources = (article) => {
  if (!article.link) {
    return {};
  }

  const articleSourceUrl = new URL(article.link).searchParams.get('url');

  if (!articleSourceUrl) {
    return {};
  }

  return {
    articleSourceUrl,
    articleSource: new URL(articleSourceUrl).hostname,
  };
};

const deleteAllAlerts = () => {
  googleAlertsApi.sync(() => {
    deleteAlerts(getAlerts());
  });
};

const getAlerts = () => {
  try {
    return googleAlertsApi.getAlerts();
  } catch (e) {
    console.log(e);
    return [];
  }
};

const deleteAlerts = (alerts) => {
  if (alerts == null || alerts.length == 0) return;

  googleAlertsApi.remove(alerts[0].id, (error, body) => {
    if (!error) {
      deleteAlerts(getAlerts());
    }
  });
};

module.exports = {
  createAlertByInterest,
  downloadArticles,
  deleteAllAlerts,
};
