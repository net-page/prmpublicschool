import React from 'react';

type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<{}, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log to console (or add telemetry here)
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id="error-boundary">
          <div className="card">
            <h2 style={{ margin: 0, marginBottom: 8 }}>Something went wrong</h2>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#7f1d1d' }}>
              {String(this.state.error?.message || 'Unknown error')}
            </pre>
            <p style={{ marginTop: 8, color: '#374151' }}>Try reloading or open the browser console for details.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
