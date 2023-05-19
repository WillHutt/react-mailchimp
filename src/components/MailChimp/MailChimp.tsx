import { useState } from 'react';
import jsonp from 'jsonp';

export const MailChimp = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    // const url = 'insert-mailchimp-action-url-here';
    const url =
      'https://gmail.us13.list-manage.com/subscribe/post-json?u=7364a454da293a273e460761f&amp;id=b6136d7278&amp;f_id=00ca96e2f0';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_: any, data: any) => {
      console.log('data', data);
      const { msg } = data;

      alert(msg);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="EMAIL"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
