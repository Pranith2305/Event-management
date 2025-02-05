import { Wifi, Camera, Mic, Volume2 } from "lucide-react"

export function StatusGrid() {
  return (
    <div className="pihu-assistant-status-grid">
      <div className="pihu-assistant-status-card">
        <div className="pihu-assistant-status-icon">
          <Wifi size={20} />
        </div>
        <div className="pihu-assistant-status-content">
          <div className="pihu-assistant-status-label">Internet</div>
          <div className="pihu-assistant-status-value success">
            <span className="pihu-assistant-status-dot"></span>
            6.62 Mbps
          </div>
        </div>
      </div>

      <div className="pihu-assistant-status-card">
        <div className="pihu-assistant-status-icon">
          <Camera size={20} />
        </div>
        <div className="pihu-assistant-status-content">
          <div className="pihu-assistant-status-label">Camera</div>
          <div className="pihu-assistant-status-value warning">
            <span className="pihu-assistant-status-dot"></span>
            Issues detected
          </div>
        </div>
      </div>

      <div className="pihu-assistant-status-card">
        <div className="pihu-assistant-status-icon">
          <Mic size={20} />
        </div>
        <div className="pihu-assistant-status-content">
          <div className="pihu-assistant-status-label">Microphone</div>
          <div className="pihu-assistant-status-value success">
            <span className="pihu-assistant-status-dot"></span>
            Connected
          </div>
        </div>
      </div>

      <div className="pihu-assistant-status-card">
        <div className="pihu-assistant-status-icon">
          <Volume2 size={20} />
        </div>
        <div className="pihu-assistant-status-content">
          <div className="pihu-assistant-status-label">Audio</div>
          <div className="pihu-assistant-status-value success">
            <span className="pihu-assistant-status-dot"></span>
            Connected
          </div>
        </div>
      </div>
    </div>
  )
}

