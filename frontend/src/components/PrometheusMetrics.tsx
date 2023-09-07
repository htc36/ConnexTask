interface MetricsData {
  data: string | null;
}

export function PrometheusMetrics(props: MetricsData) {
  return (
    <div className='component metrics'>
      <pre>{props.data}</pre>
    </div>
  );
}
