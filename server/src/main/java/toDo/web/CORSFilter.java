package toDo.web;

import java.io.IOException;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CORSFilter
		implements Filter {

	private static final String ALLOWED_DOMAINS_REGEXP = ".*";

	public void init(FilterConfig filterConfig)
			throws ServletException {

	}

	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
			throws IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) servletRequest;
		HttpServletResponse resp = (HttpServletResponse) servletResponse;

		String origin = req.getHeader("Origin");
		if (origin != null && origin.matches(ALLOWED_DOMAINS_REGEXP)) {
			resp.addHeader("Access-Control-Allow-Origin", origin);
			if ("options".equalsIgnoreCase(req.getMethod())) {
				resp.setHeader("Allow", "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS");
				if (origin != null) {
					String headers = req.getHeader("Access-Control-Request-Headers");
					String method = req.getHeader("Access-Control-Request-Method");
					resp.addHeader("Access-Control-Allow-Methods", method);
					resp.addHeader("Access-Control-Allow-Headers", headers);
					// optional, only needed if you want to allow cookies.
					resp.addHeader("Access-Control-Allow-Credentials", "true");
					resp.setContentType("text/plain");
				}
				resp.getWriter().flush();
				return;
			}
		}

		// Fix ios6 caching post requests
		if ("post".equalsIgnoreCase(req.getMethod())) {
			resp.addHeader("Cache-Control", "no-cache");
		}

		if (filterChain != null) {
			filterChain.doFilter(req, resp);
		}
	}

	public void destroy() {

	}

}
