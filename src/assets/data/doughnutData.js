export const createData = (data) => {
  return {
  labels: ['Red', 'green'],
  datasets: [
    {
      label: '# of Votes',
      data: [100-data, data],
      backgroundColor: [
        'rgba(252, 255, 238, 1)',
        'rgba(255, 100, 100, 1)',
      ],
      borderWidth: 1,
      cutout: '72%'
    },
  ],
}};
