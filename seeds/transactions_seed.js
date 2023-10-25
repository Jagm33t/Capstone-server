exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        { date: '2023-06-01', type: 'send', amount: 10.5, company: 'Company A' },
        { date: '2023-06-03', type: 'receive', amount: 15.75, company: 'Company B' },
        { date: '2023-06-05', type: 'send', amount: 8.2, company: 'Company C' },
        { date: '2023-06-07', type: 'receive', amount: 12.9, company: 'Company D' },
        { date: '2023-06-10', type: 'send', amount: 5.3, company: 'Company E' },
        { date: '2023-06-12', type: 'receive', amount: 18.6, company: 'Company F' },
        { date: '2023-06-14', type: 'send', amount: 7.8, company: 'Company G' },
        { date: '2023-06-17', type: 'receive', amount: 11.25, company: 'Company H' },
        { date: '2023-06-19', type: 'send', amount: 9.4, company: 'Company I' },
        { date: '2023-06-21', type: 'receive', amount: 14.15, company: 'Company J' }
      ]);
    });
};
